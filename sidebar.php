<?php
/**
 * The template for displaying the sidebar.
 *
 *
 * @subpackage Medical Center
 * @since      Medical Center
 */
?>
<div id="mdclcntr_sidebar">
	<?php if ( is_active_sidebar( 'medical-center-sidebar' ) ) {
		dynamic_sidebar( 'medical-center-sidebar' );
	} else {
		/* Default */
		the_widget( 'WP_Widget_Recent_Posts' );
		the_widget( 'WP_Widget_Recent_Comments' );
		the_widget( 'WP_Widget_Archives' );
		the_widget( 'WP_Widget_Categories' );
	} ?>
</div><!-- mdclcntr_sidebar -->
