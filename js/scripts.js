( function ( $ ) {
	$( document ).ready( function() {
		/* 
		*Slider
		*/
		$( '.flexslider' ).flexslider( { /*initial slider*/
			animation: "fade",
			directionNav: false
		});
		// animation: "fade",		//Selecting the type of animation (fade/slide)
		// slideshow: true,			//Enable autoplay slideshow (true/false)
		// slideshowSpeed: 7000,	//Speed ​​setting switch slides in a slideshow, in milliseconds
		// animationDuration: 500,	//Speed of the animation, in milliseconds
		// directionNav: true,		//Enable Navigation previous / next (true/false)
		// controlNav: true,		//Enabling pagination (true/false)
		// prevText: "Previous",	//text for the item "previous" directionNav
		// nextText: "Next",		//text for the item "next" directionNav
		// slideToStart: 0,			//Slide that starts a slideshow. Numbering slides by the rule array (0 = first slide)
		// pauseOnAction: true,		//Pauses the slideshow in the interaction with the control element (true / false)
		// pauseOnHover: false,		//Pauses slideshow on hover on the slide, then slide continues (true / false)
		/* 
		* Checkbox.
		*/
		$( "input[ type='checkbox' ]" ).wrap( "<div class='mdclcntr-check'></div>" );
		$( '.mdclcntr-check' ).hover( function() {
		// hover realization
			$( this ).toggleClass( 'mdclcntr-hover' ) 
		});
		// active Realization
		$( '.mdclcntr-check' ).click( function() {
			if ( $( this ).find( 'input' ).is( ':checked' ) ) {
				$( this ).removeClass( 'mdclcntr-active' );
				$( this ).find( 'input' ).attr( 'checked', false );
			}
			else {
				$( this ).addClass( 'mdclcntr-active' );
				$( this ).find( 'input' ).attr( 'checked', true );
			}
		});
		
		/*
		* Radio buttons.
		*/
		$( "input[ type='radio' ]" ).wrap( "<div class='mdclcntr-radio'></div>" );
		// hover realization
		$( '.mdclcntr-radio' ).mouseenter( function() {
			$( this ).addClass( 'mdclcntr-hover' );
		});
			$( '.mdclcntr-radio' ).mouseleave( function() {
			$( this ).removeClass( 'mdclcntr-hover' );
		});
		// active Realization
		$( '.mdclcntr-radio' ).click( function () {
			$( '.mdclcntr-radio' ).removeClass( 'mdclcntr-active' );
			if ( $( this ).find( 'input' ).is( 'checked' ) ) {
				$( this ).find( 'input' ).removeattr( 'checked', false );
		}
			else {
				$( this ).addClass( 'mdclcntr-active' );
				$( this ).find( 'input' ).attr( 'checked', true );
		}
		});

		/*
		* Select section restyle
		*/

		var test = $( 'select' ).size();
		for ( var k = 0; k < test; k++ ) {
			$( 'select' ).eq( k ).css( 'display', 'none' );
			$( 'select' ).eq( k ).after( CreateSelect( k ) );
		}

		$( document ).on( 'click', function( e ) {
			var container1 = $( '.mdclcntr-select' );
			if ( !container1.is( e.target ) && container1.has( e.target ).length === 0 ) {
				container1.find( '.select-options' ).hide();
			} else if ( container1.is( e.target ) || container1.has( e.target ).length !== 0 ) {
				var container2 = $( e.target ).closest( '.mdclcntr-select' );
				if ( container2.find( '.select-options' ).is( ':visible' ) ) {
					container2.find( '.select-options' ).hide();
				} else {
					container1.find( '.select-options' ).hide();
					container2.find( '.select-options' ).show();
				}
			}
		} );

		$( '.mdclcntr-select' ).find( '.select-option' ).click( function() {
			$( this ).closest( '.select-options' ).find( '.select-option' ).removeClass( 'mdclcntr-option-selected' );
			$( this ).addClass( 'mdclcntr-option-selected' );
			// write text to active opt
			$( this ).parent().parent().find( '.select-active-option' ).find( 'div:first' ).text( $( this ).text() );
			// remove active option from init select
			$( this ).parent().parent().prev( 'select' ).find( 'option' ).removeAttr( 'selected' );
			// add atrr selected to select
			$( this ).parent().parent().prev( 'select' ).find( 'option' ).eq( ( $( this ).attr( 'name' ) ) ).attr( 'selected', 'selected' );
		});

		// function for custom select
		function CreateSelect( k ) {
		// create select division
			var sel = document.createElement( 'div' );
			( function( $ ) {
				$( sel ).addClass( 'mdclcntr-select' );
				// create active-option division
				var active_opt = document.createElement( 'div' );
				$( active_opt ).addClass( 'select-active-option' );
				$( active_opt ).append( '<div></div>' );
				$( active_opt ).append( '<div class="select-button"></div>' );
				$( active_opt ).find( 'div:first' ).text( $( 'select' ).eq( k ).find( 'option' ).first().text() );
				// create options division
				var option_array = document.createElement( 'div' );
				$( option_array ).addClass( 'select-options' );
				// create array of optgroups
				var count = $( 'select' ).eq( k ).find( 'optgroup' ).size();
				var optgroups = [];
				// create options division
				if ( count ) {
					var z = 0;
					for ( var i = 0; i < count; i++ ) {
						optgroups[i] = document.createElement( 'div' );
						$( optgroups[i] ).addClass( 'select-optgroup' );
						$( optgroups[i] )
							.text( $( 'select' ).eq( k ).find( 'optgroup' ).eq( i ).attr( 'label' ) );
					}
					for ( var i = 0; i < count; i++ ) {
						$( option_array ).append( optgroups[i] );
						for ( var j = 0; j < $( 'select' ).eq( k ).find( 'optgroup' ).eq( i ).children().size(); j++ ) {
							var opt = document.createElement( 'div' );
							$( opt ).addClass( 'select-option' );
							$( opt ).attr( 'value', $( 'select' ).eq( k ).find( 'optgroup' ).eq( i ).children().eq( j ).attr( 'value' ) );
							$( opt ).text( $( 'select' ).eq( k ).find( 'optgroup' ).eq( i ).children().eq( j ).text() );
							$( opt ).attr( 'name', z );
							z++;
							$( option_array ).append( opt );
						}
					}
				} else {
					for ( var i = 0; i < $( 'select' ).eq( k ).find( 'option' ).size(); i++ ) {
						var opt = document.createElement( 'div' );
						$( opt ).addClass( 'select-option' );
						$( opt ).attr( 'value', $( 'select' ).eq( k ).find( 'option' ).eq( i ).attr( 'value' ) );
						$( opt ).attr( 'name', i );
						$( opt ).text( $( 'select' ).eq( k ).find( 'option' ).eq( i ).text() );
						$( option_array ).append( opt );
					}
				}
				$( sel ).append( active_opt );
				$( sel ).append( option_array );
			} )( jQuery );
		return sel;
		}

		// correct dropdowns widgets
//		$( '.widget' ).children( 'select' ).wrap( '<div class="dropdown-widget"></div>' );
//		var drops = $( '.widget' ).children( '.mdclcntr-select' ).size();
//		var current;
//		var target;
//		for ( var i = 0; i < 2; i++ ) {
//			current = $( '.widget' ).find( '.mdclcntr-select' ).eq( i );
//			target = $( current ).prev( '.dropdown-widget' );
//			$( current ).detach();
//			$( current ).appendTo( $( target ) );
//		}
		// archive-dropdown widget functional
		$( '[name=archive-dropdown]' ).next( '.mdclcntr-select' ).find( '.select-option' ).click( function() {
			location.href = $( this ).attr( 'value' );
		});
		// category-dropdown widget functional
		$( '#cat' ).next( '.mdclcntr-select' ).find( '.select-option' ).click( function() {
			location.href = mdclcntrStringJs.homeUrl + '?cat=' + $( this ).attr( 'value' );
		});
		
		/*
		*Clear button.
		*/
		$( 'input[type="reset"]' ).click( function() {
			// reset checkboxes, radio, input:file
			$( '.mdclcntr-check,.mdclcntr-radio' ).removeClass( 'mdclcntr-active' );
			$( '.file_validator' ).text( mdclcntrStringJs.fileNotSel );
		});

		/*
		*Function style for input [type="file"] 
		*/
		$( 'input[type="file"]' ).css( {opacity: 0} ).wrap( '<div class="wrap_file"></div>' );
		$( 'input[type="file"]' ).hide();
		$( '.wrap_file' ).append( '<div class="style_file"></div>' );
		$( '.style_file' ).wrap( '<div class="file_form"></div>' );
		$( '.style_file' ).append( '<span class="file_inner">' + mdclcntrStringJs.chooseFile + '</span>' );
		$( '.file_form' ).append( '<span class="file_validator">' + mdclcntrStringJs.fileNotSel + '</span>' );
		$( 'input[type="file"]' ).on( 'change', function() {
			$( '.file_validator' ).text( $( this )[0].files[0]['name'] );
		});
		$( '.style_file' ).click( function() {
			$( '.wrap_file input' ).trigger( 'click' );
		});

		/* Check of previous selected items */
		$( 'select' ).each(function() {
			var index = $( this ).find( "option[selected]" ).index();
			if (index >= 0) {
				/* add attr selected to select */
				var selected_select = $( this ).find( "option[selected]" );
				/* write text to active opt */
				$( selected_select ).parent().next().find( 'div:first' ).find( 'div:first' ).text( selected_select.text() );
			}
		});

		/* Clear select elements */
		$( 'input:reset' ).click( function() {
			/* Clear original selects. */
			$( 'select' ).each(function() {
				/* set path */
				var clear_select = $( this ).find( "option:first" );
				var clear_selected_select = $( this ).find( "option[selected]" );
				/* clear active opt */
				$( clear_selected_select ).removeAttr( 'selected' );
				$( clear_select ).attr( 'selected', 'selected' );
			});
			/* Clear custom selects. */
			$( '.select-active-option' ).each(function() {
				/* set path */
				var clear_select = $( this ).parent().prev().find( "option:first" );
				var clear_selected_select = $( this ).find( ".select-options" ).find( ".mdclcntr-option-selected" );
				/* clear active opt */
				$( this ).find( "div:first" ).text( clear_select.text() );
				$( clear_selected_select ).removeClass( 'grngrdn-option-selected' );
			});
		});

	});
} )( jQuery );