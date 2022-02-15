import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window, } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';



const filters = {
  type: 'messaging',
  members: { $in: ['akshit', 'user1', 'user2'] },
};
const sort = { last_message_at: -1 };
// console.log("Hello");

const ChatApp = (props) => {

  let userToken = "";
  const username = localStorage.getItem("username");
  if (username == 'akshit')
    userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWtzaGl0In0.fWr9z1b8O1CYfxPRQC1z7JOWoQM8Z3F1S3Z7C4wdG3E";
  else if (username == 'user1')
    userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcjEifQ.dh0-qZMKYXO44KLIqnUE47s1d6KyNkoi_88p0KHzfGY";
  else if (username == 'user2')
    userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcjIifQ.PiZE2vc6e9qgJO_GTnOxPZNC1R7OIKGFP_QCYxhtdjw";

  console.log(props.location);
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('chbyjnv2st7v');
      // const serverClient = StreamChat.getInstance('chbyjnv2st7v','wh8na75jcfk443vvavpghkut4z974vx5p93xt47e7drj42p7dy62c9pku3mzukrr');
      // const userToken = client.createToken(username)
      console.log(userToken);
      await client.connectUser(
        {
          id: username,
          name: username,
          image:
            'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg',
        },
        userToken
      );

      setChatClient(client);
    };

    initChat();
  }, []);



  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatApp;


// import React, { useEffect, useState } from 'react';
// import { StreamChat } from 'stream-chat';

// import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window, } from 'stream-chat-react';

// // import 'stream-chat-react/dist/css/index.css';
// let userToken = "";
// const username = localStorage.getItem("username");
// if (username == 'akshit')
//   userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWtzaGl0In0.fWr9z1b8O1CYfxPRQC1z7JOWoQM8Z3F1S3Z7C4wdG3E";
// else if (username == 'user1')
//   userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcjEifQ.dh0-qZMKYXO44KLIqnUE47s1d6KyNkoi_88p0KHzfGY";
// else if (username == 'user2')
//   userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcjIifQ.PiZE2vc6e9qgJO_GTnOxPZNC1R7OIKGFP_QCYxhtdjw";

// // const sort = { last_message_at: -1 };
// // console.log("Hello");
// const client = StreamChat.getInstance('chbyjnv2st7v');

//       // console.log(userToken);
//       client.connectUser(
//         {
//           id: username,
//           name: username,
//           image:
//             'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg',
//         },
//         userToken
//       );

//       // setChatClient(client);

//       const channel = client.channel('messaging',  {
//         // add as many custom fields as you'd like
//         image: 'https://www.drupal.org/files/project-images/react.png',
//         name: 'Chat App',
//         members: ['akshit','user1','user2']
//       });


//   const ChatApp = () => {
//   return (
//     <Chat client={client} theme="messaging light">
//       {/* <ChannelList filters={filters} sort={sort} /> */}
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default ChatApp;

