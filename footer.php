<?php
/**
 * The template for displaying the footer.
 *
 *
 * @subpackage Medical Center
 * @since      Medical Center
 */
?>
</div><!-- mdclcntr_main -->
<div class="clear"></div>
<div id="mdclcntr_footer">
	<footer>
		<div class="mdclcntr_footer_author">
			<?php echo __( 'Powered by', 'medical-center' ) . '&nbsp;'; ?>
			<a href="<?php echo esc_url( wp_get_theme()->get( 'AuthorURI' ) ); ?>">BestWebLayout</a> <?php _e( 'and', 'medical-center' ); ?>
			<a href="<?php echo esc_url( 'http://wordpress.org/' ); ?>"><?php _e( 'WordPress', 'medical-center' ); ?></a>
		</div>
		<div class="mdclcntr_footer_bot">
			<?php echo '&copy;' . date_i18n( 'Y ' ) . get_bloginfo( 'name' ); ?>
		</div>
	</footer>
</div>  <!-- mdclcntr_footer -->
</div><!-- mdclcntr_home_page -->
<?php wp_footer(); ?>
</body>
</html>
