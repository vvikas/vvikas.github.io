'use strict'; var//jshint ignore:line
  /*
   * UI CONTROLLER MODULE
   * Keeps all the ui-related stuff like movement, clicks, dragging.
   * */
  UIController = { //jshint ignore:line

    // Attaches drag event to the keyboard
    attachDragToBase: function () {
      Visualization.$base.draggable({
        containment: Visualization.containment,
        cursor: 'move',
        stop: function () {
          // Tweak: reassigns the auto-resize feature of the keyboard. (Needed on layout/language switch)
          $(this).css({
            width: 'auto',
            height: 'auto'
          });
        }
      });
    },

    // Used for visual representation of button clicking.
    attachOnClickBtnEvent: function () {
      $('.' + BUTTON_CLASS).on('mousedown', function () {
        var $this = $(this);

        $this.addClass(CLICKED_CLASS);

        // Used if the user moves the mouse cursor away from a button when holding clicked.
        // The following code will un-click the button.
        setTimeout(function () {
          $this.removeClass(CLICKED_CLASS);
        }, 500);
      })
        .on('mouseup', function () {
          $(this).removeClass(CLICKED_CLASS);
        });
    },

    // Minimization feature
    minimizeKeyboard: function () {
      Visualization.$minBtn.on('click', function () {
        //Visualization.$base.slideUp();
        Visualization.$base.removeClass('show');

        Visualization.$toggleBtn.fadeIn();
      });
    },

    // Maximization feature
    maximizeKeyboard: function () {
      Visualization.$toggleBtn.on('click', function () {
        //Visualization.$base.slideDown();
        Visualization.$base.addClass('show');

        $(this).hide();
      });
    },

    // ENTRY POINT
    $$load: function () {
      this.attachDragToBase();
      this.attachOnClickBtnEvent();
      this.minimizeKeyboard();
      this.maximizeKeyboard();
    }
  };
