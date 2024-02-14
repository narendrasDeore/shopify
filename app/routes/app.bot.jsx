import React, { useEffect } from 'react';

function Chatbot() {
    useEffect(() => {
        const initializeChatbot = () => {
            if (!window.botpressWebChatInitialized) {
                const injectScript = document.createElement('script');
                injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
                injectScript.async = true;
                document.body.appendChild(injectScript);

                const configScript = document.createElement('script');
                configScript.src = 'https://mediafiles.botpress.cloud/0d78c113-c9fb-48d6-9117-f95d66da6b4c/webchat/config.js';
                configScript.defer = true;
                document.body.appendChild(configScript);

                // Set a flag to indicate that the chatbot has been initialized
                window.botpressWebChatInitialized = true;
            }
        };

        initializeChatbot();

        // Clean up on unmount
        return () => {
        };
    }, []);

    return null; 
}

export default Chatbot;
