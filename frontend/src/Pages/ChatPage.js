// import { Box } from "@chakra-ui/layout";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/miscellaneous/SideDrawer";
// import { ChatState } from "../Context/ChatProvider";
// import ChatBox from "../components/ChatBox";
// import { Flex, Spacer } from "@chakra-ui/react";
// import { SimpleGrid } from "@chakra-ui/react";
// import { useState } from "react";

// const Chatpage = () => {
//   const { user } = ChatState();
//   const [fetchAgain, setFetchAgain] = useState(false);

//   return (
//     <div style={{ width: "100%" }}>
//       {user && <SideDrawer />}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         flexDirection={"row"}
//         w="100%"
//         h="100%"
//         p="10px"
//       >
//         <Box display="flex">
//           {user && <MyChats fetchAgain={fetchAgain} />}
//           {user && (
//             <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
//           )}
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Chatpage;

import { Box, Center } from "@chakra-ui/layout";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
