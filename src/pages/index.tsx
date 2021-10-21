import * as React from "react"
import Additionals from "../components/Additionals";
import Breads from "../components/Breads";
import Cheeses from "../components/Cheeses";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Meats from "../components/Meats";

const IndexPage = () => {

  window.watsonAssistantChatOptions = {
    integrationID: "006af03b-e71a-4f96-92e7-1399761276ae", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "b587a120-6e28-40b7-9278-2053efef6e8c", // The ID of your service instance.
    onLoad: function (instance) { instance.render(); }
  };
  setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
  });

  return (
    <div>
      <Breads />
      <Meats />
      <Cheeses />
      <Additionals />
      <Info />
      <Footer />
    </div>
  )

}

export default IndexPage
