var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
      columnWidth: 100
    });
    
    // make all items draggable
    var $items = $grid.find('.grid-item').draggable();
    // bind drag events to Packery
    $grid.packery( 'bindUIDraggableEvents', $items );
    