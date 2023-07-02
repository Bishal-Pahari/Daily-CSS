// Select the button element from the HTML document
const button = document.querySelector("button");

// Add an event listener to the button for the "click" event
button.addEventListener("click", notificationAlert);

// Function to handle the notification alert
function notificationAlert() {
  // Request permission from the user to show notifications
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      // If permission is granted, create a new notification
      const notification = new Notification("Example Notification", {
        body: "More text...",
        data: { hello: "World" },
        icon: "logo.png",
        tag: "Welcome Message", // unique identity
      });

      // Add an event listener for any errors that occur with the notification
      notification.addEventListener("error", (e) => {
        alert("Error");
      });
    }
  });
}

// Declare variables for notification and interval
let notification;
let interval;

// Add an event listener to detect when the visibility of the document changes
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    // If the document becomes hidden, record the leave date and start an interval
    const leaveDate = new Date();
    interval = setInterval(() => {
      // Create a new notification to remind the user to come back
      notification = new Notification("Come back please", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds`,
        tag: "Come back",
      });
    }, 100);
  } else {
    // If the document becomes visible again, clear the interval and close the notification
    clearInterval(interval);
    if (notification) {
      notification.close();
    }
  }
});
