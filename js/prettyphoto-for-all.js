jQuery(document).ready(function(){
	$( 'button.prettyphoto' ).on( 'click', function(){
		$(this).addClass( 'pp-opener' );
	});

	if ( $.fn.prettyPhoto !== undefined ) {
		var clickedButton;
		$( 'button.prettyphoto' ).prettyPhoto({
			animationSpeed:"normal",
			hook:"data-rel",
			padding:15,
			opacity:.7,
			showTitle:!0,
			allowresize:!0,
			counter_separator_label:"/",
			hideflash:!1,
			deeplinking:!1,
			modal:!1,
			callback: function() {
				$( '.pp-opener' ).focus().removeClass( 'pp-opener' );
			},
			social_tools:"",
			changepicturecallback: function() {
				if ( ! $( '.pp_pic_holder' ).hasClass( 'inited' ) ) {
					$( '.pp_pic_holder' ).addClass( 'inited' );
					$( '.pp_pic_holder button' ).first().focus();
					$( '.pp_pic_holder button' ).first().on( 'keydown', function( e ) {
						if ( 9 == e.keyCode && e.shiftKey ) {
							e.preventDefault();
							$( '.pp_pic_holder button' ).last().focus();
						}
					});
					$( '.pp_pic_holder button' ).last().on( 'keydown', function( e ) {
						if ( 9 == e.keyCode && ! e.shiftKey ) {
							e.preventDefault();
							$( '.pp_pic_holder button' ).first().focus();
						}
					});
					$( '.pp_pic_holder button' ).on( 'click', function(){
						clickedButton = $(this);
					});
					$( '.pp_gallery ul button' ).attr( 'aria-current', 'false' ).first().attr( 'aria-current', 'true' );
				} else {
					$( '.pp_gallery ul button' ).attr( 'aria-current', 'false' );
					$( '.pp_gallery ul .selected button' ).attr( 'aria-current', 'true' );
					clickedButton.focus();
				}
			},
		});
	}
});
