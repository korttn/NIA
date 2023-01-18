//simple bar
var SimpleBarItem = new SimpleBar(document.querySelector('.ui-scroller'));
var SimpleBarItem = new SimpleBar($('.ui-scroller')[0]);
var SimpleBarItem = $('.ui-scroller').each(function (index, element) {
    //console.log("okokokok");
    new SimpleBar(element);
});
option = {
    autoHide: true,
    forceVisible: false,
    classNames: {
        resizeWrapper: 'simplebar-resize-wrapper',
        content: 'simplebar-content',
        offset: 'simplebar-offset',
        mask: 'simplebar-mask',
        wrapper: 'simplebar-wrapper',
        placeholder: 'simplebar-placeholder',
        scrollbar: 'simplebar-scrollbar',
        track: 'simplebar-track',
        heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
        heightAutoObserverEl: 'simplebar-height-auto-observer',
        visible: 'simplebar-visible',
        horizontal: 'simplebar-horizontal',
        vertical: 'simplebar-vertical',
        hover: 'simplebar-hover',
        dragging: 'simplebar-dragging'
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    direction: 'ltr',
    timeout: 1000
}
new SimpleBar(document.querySelector('.ui-scroller'), option)