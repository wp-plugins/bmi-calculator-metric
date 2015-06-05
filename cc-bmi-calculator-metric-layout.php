<?php
function load_cc_bmi_calc_metric($id, $title, $show_url = 0, $bg_color, $border_color, $text_color)
{
    if ($show_url == 1)
        load_cc_bmi_custom_colors($id, $bg_color, $border_color, $text_color);
?>


<div class="CCB-Widget CCB-Widget-<?php echo $id; ?>">
	 	<div class="CCB-WidgetTitle CCB-WidgetTitle-<?php echo $id; ?>"><?php echo $title; ?></div>		   
        <div class="CCB-rowdiv">
			 <div class="CCB-leftdiv">
                <label for="<?php echo $id; ?>-bmi-height-metric">Height (cm) :</label>
			 </div>
			 <div class="CCB-rightdiv">
  	    	    <input id="<?php echo $id; ?>-bmi-height-metric" class="bmi-height-metric" type="tel" placeholder="enter height">
			 </div>
        </div>
        <div class="CCB-rowdiv">
			 <div class="CCB-leftdiv">
                <label for="<?php echo $id; ?>-bmi-weight-metric">Weight (kg) :</label>
			 </div>
			 <div class="CCB-rightdiv">
  	    	    <input id="<?php echo $id; ?>-bmi-weight-metric" class="bmi-weight-metric" type="tel" placeholder="enter weight">
			 </div>
        </div>
        <div class="CCB-rowdiv">
            <div id="<?php echo $id; ?>-bmi-metric-results" class="CCB-results">
              <span id="<?php echo $id; ?>-bmi-metric"></span>
            </div>
        </div>
        <div class="CCB-rowdiv">
			 <div class="CCB-leftdiv CCB-btndiv">
                 <button id="<?php echo $id; ?>-bmi-metric-calculate" class="CCB-button bmi-metric-calulate" type="button">Calculate BMI</button>
			 </div>
			 <div class="CCB-rightdiv CCB-btndiv">
  	    	    <button id="<?php echo $id; ?>-bmi-metric-clear" class="CCB-button bmi-metric-clear" type="button">Reset values</button>
			 </div>
        </div>


 
        <?php if ($show_url) { ?>
    		<div class="CCB-rowdiv" >
                <div class="CCB-WidgetSignature CCB-WidgetSignature-<?php echo $id; ?>">Provided by <a href="http://health.calculatorscanada.ca/bmi-calculator" target="_blank">CalculatorsCanada.ca</a></div>
		    </div>
        <?php } ?>
		
</div>

		
		<?php 
}


function load_cc_bmi_custom_colors($id, $bg_color, $border_color, $text_color)
{
?>
<style type="text/css">
.CCB-Widget-<?php echo $id; ?>, .CCB-WidgetTitle-<?php echo $id; ?> a, .CCB-WidgetTitle-<?php echo $id; ?> a:visited, .CCB-WidgetSignature-<?php echo $id; ?> a, .CCB-WidgetSignature-<?php echo $id; ?> a:visited, .CCB-WidgetLine-<?php echo $id; ?> {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";" : ""); ?>
    <?php echo (isset( $bg_color) ? "background-color:" . $bg_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . " !important;": ""); ?>
}

.CCB-Widget-<?php echo $id; ?> input[type=text], .CCB-Widget-<?php echo $id; ?> input[type=tel] {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . ";": ""); ?>
    <?php echo (isset( $input_bg_color) ? "background-color:" . $input_bg_color . ";": ""); ?>
} 
</style>
<?php 
}
?>