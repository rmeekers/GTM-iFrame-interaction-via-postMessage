<script>
  // Add an eventListener which listens for postMessages
  window.addEventListener('message', receiveMessage, false);

  // This function receives the postMessages and processes them
  function receiveMessage(event)  {
    switch(event.data.messageType) {

      // messageType equals pushEventoToDatalayer
      case 'pushEventoToDatalayer':
        // We verify if all required fields are included in the postMessage before we push an event to the dataLayer
        if (event.data.eventAction && event.data.eventLabel && event.data.eventCategory) {   
          dataLayer.push({
              'event'         : 'trackEvent',
              'eventAction'   : event.data.eventAction,
              'eventLabel'    : event.data.eventLabel,
              'eventCategory' : event.data.eventCategory
            });
        }
        break;

      // If there is something wrong with the postMessage, we generate an error event
      default:
        dataLayer.push({
          'event'         : 'Error',
          'eventAction'   : 'Invalid postMessage received',
          'eventLabel'    : 'Origin: '+event.origin+' - Data: '+JSON.stringify(event.data),
          'eventCategory' : 'postMessage'
        });
        break;

      }
    }
</script>