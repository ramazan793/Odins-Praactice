jQuery(document).on("pageinit", function($) {
    (function() {
        var supportTouch = $.support.touch,
                scrollEvent = "touchmove scroll",
                touchStartEvent = supportTouch ? "touchstart" : "mousedown",
                touchStopEvent = supportTouch ? "touchend" : "mouseup",
                touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
        $.event.special.swipeupdown = {
            setup: function() {
                var thisObject = this;
                var $this = $(thisObject);
                $this.bind(touchStartEvent, function(event) {
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event,
                            start = {
                                time: (new Date).getTime(),
                                coords: [ data.pageX, data.pageY ],
                                origin: $(event.target)
                            },
                            stop;

                    function moveHandler(event) {
                        if (!start) {
                            return;
                        }
                        var data = event.originalEvent.touches ?
                                event.originalEvent.touches[ 0 ] :
                                event;
                        stop = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ]
                        };

                        // prevent scrolling
                        if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                            event.preventDefault();
                        }
                    }
                    $this
                            .bind(touchMoveEvent, moveHandler)
                            .one(touchStopEvent, function(event) {
                        $this.unbind(touchMoveEvent, moveHandler);
                        if (start && stop) {
                            if (stop.time - start.time < 1000 &&
                                    Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                    Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                                start.origin
                                        .trigger("swipeupdown")
                                        .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                            }
                        }
                        start = stop = undefined;
                    });
                });
            }
        };
        $.each({
            swipedown: "swipeupdown",
            swipeup: "swipeupdown"
        }, function(event, sourceEvent){
            $.event.special[event] = {
                setup: function(){
                    $(this).bind(sourceEvent, $.noop);
                }
            };
        });

    })();
    $(document).on('swiperight', function() {
        direction = "right";
        xd = 1;
        yd = 0;
        $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
    })
    $(document).on('swipeleft', function() {
        direction = "left";
        xd = -1;
        yd = 0;
        $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
    })
    $(document).on('swipeup', function() {
        direction = "top";
        xd = 0;
        yd = -1;
        $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
    })
    $(document).on('swipedown', function() {
        direction = "bottom";
        xd = 0;
        yd = 1;
        $(grid[snake[0].x][snake[0].y].get()).addClass('checkbox').attr('id', direction);
    })
});
