<script>
	// Set the hostname of the parent window
	var parentHostname = (window.location != window.parent.location) ? document.referrer: document.location.href;

	// Configure the content of the message to fit your situation
	var message = {
		// Should correspond with a messageType the postMessage Listener can process
		messageType		: 'pushEventoToDatalayer',
		// Configure these actions with the date you want in your event
		eventAction		: 'Click',
		eventLabel		: 'Button ID', 
		eventCategory	: 'Widgets'
	};

	// post the message to the parent window
	window.parent.postMessage(message, parentHostname);
</script>