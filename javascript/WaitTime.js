const queueUpdate = [
    {
        "type": "requestSuccess",
        "waitTime": 60
    }
];

for (let i = 0; i < 500; i++) {
    queueUpdate.push({
        type: "queueUpdate",
        "waitTime": 500 - i,
        "message": `${i}. please hold on while I am connecting you to an agent the estimated wait time is ${500 - i}`
    });
}

// queueUpdate[10] = {
//     "type": "ChatEstablished",
//     "waitTime": 60
// };

var index = 0;
var pollingInterval = 3 * 1000;
var queueUpdateKey, QUEUE_UPDATE_TIMEOUT = 1 * 60 * 1000;
var refreshCount = 0;
var message;

var getPendingMessage = () => {
    console.log(`polling ${index}`);
    if (index == queueUpdate.length - 1) clearInterval(interval);
    const event = queueUpdate[index++];
    message = event.message;

    if (event.type != "queueUpdate" && queueUpdateKey) {
        clearTimeout(queueUpdateKey);
    }

    if (event.type == "queueUpdate" && !queueUpdateKey) {
        console.log('refreshCount -> ' + refreshCount);
        if (refreshCount > 0) {
            queueUpdateKey = setTimeout(function () {
                clearTimeout(queueUpdateKey);
                console.log(message);
            }, QUEUE_UPDATE_TIMEOUT);
        } else {
            console.log(message);
            refreshCount++;
        }
    } else if (event.type == "requestSuccess") {
        console.log("Chat request success waiting for agent.");
    } else if (event.type == "ChatEstablished") {
        console.log("Now you have connected with the agent.");
    }
}

var interval = setInterval(getPendingMessage, 3000);
