<script>
 /** GTM iFrame interaction via postMessage 
 * postMessage Sender. To be added to the included iFrame window
 * @license MIT License
 * @author Rutger Meekers [rutger@meekers.eu]
 */

// Set the hostname of the parent window
var parentHostname = (window.location != window.parent.location) ? document.referrer : document.location.href;

// Configure the content of the message to fit your situation
var message = {
    // Should correspond with a messageType the postMessage Listener can process
    messageType: 'pushEventToDatalayer',
    // Configure these actions with the date you want in your event
    eventAction: 'Click',
    eventLabel: 'Button ID',
    eventCategory: 'Widgets'
};

// post the message to the parent window
window.parent.postMessage(message, parentHostname);
</script>