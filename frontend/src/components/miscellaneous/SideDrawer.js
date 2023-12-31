// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Input,
//   Button,
//   Box,
//   Tooltip,
//   Text,
//   Menu,
//   MenuButton,
//   Flex,
//   Spacer,
//   Avatar,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useToast,
//   useDisclosure,
//   Spinner,
// } from "@chakra-ui/react";
// import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

// import { ChatState } from "../../Context/ChatProvider";
// import ProfileModal from "./ProfileModal";
// import { useHistory } from "react-router-dom";
// import ChatLoading from "../ChatLoading";
// import UserListItem from "../useAvatar/UserListItem";

// const SideDrawer = () => {
//   const [search, setSearch] = useState();
//   const [searchResult, setSearchResult] = useState([]); //all data come like whastapp
//   const [loading, setLoading] = useState(false);
//   const [loadingChat, setLoadingChat] = useState();
//   const history = useHistory();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const toast = useToast();
//   const { user, setSelectedChat, chats, setChats } = ChatState();

//   const logoutHandler = () => {
//     localStorage.removeItem("userinfo");
//     history.push("/");
//   };

//   const accessChat = async (userId) => {
//     try {
//       setLoadingChat(true);
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//       };

//       const { data } = await axios.post("/api/chat", { userId }, config);

//       if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
//       setSelectedChat(data);
//       setLoading(false);
//       onClose();
//     } catch (error) {
//       toast({
//         title: "Error Fetching Chat",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//       setLoading(false);
//     }
//   };

//   const handleSearch = async () => {
//     if (!search) {
//       toast({
//         title: "Please Enter Something In Search",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "top-left",
//       });
//       return;
//     }

//     try {
//       setLoading(true);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.get(`/api/user?search=${search}`, config);
//       setLoading(false);
//       setSearchResult(data);
//     } catch (error) {
//       toast({
//         title: "Error Occureed",

//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//       setLoading(false);
//       console.log(user.token, "user.token");
//     }
//   };

//   return (
//     <>
//       <Box
//         d="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         bg="white"
//         w="100%"
//         p="5px 10px 5px 10px"
//         borderWidth="5px"
//       >
//         <Flex>
//           <Box>
//             <Tooltip
//               label="Search User To Chat"
//               hasArrow
//               placement="bottom-end"
//             >
//               <Button variant="ghost" onClick={onOpen}>
//                 <i className="fas fa-search"></i>
//                 <Text d={{ base: "none", md: "flex" }} px="4">
//                   SEARCH USER
//                 </Text>
//               </Button>
//             </Tooltip>
//           </Box>
//           <Spacer />
//           <Box>
//             <div>
//               <Menu>
//                 <MenuButton p={1}>
//                   <BellIcon fontSize="2xl" m={1}></BellIcon>
//                 </MenuButton>
//               </Menu>
//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   bg="white"
//                   rightIcon={<ChevronDownIcon />}
//                 >
//                   <Avatar
//                     size="sm"
//                     cursor="pointer"
//                     name={user.name}
//                     src={user.pic}
//                   />
//                 </MenuButton>

//                 <MenuList>
//                   <ProfileModal user={user}>
//                     <MenuItem>My Profile</MenuItem>
//                   </ProfileModal>
//                   <MenuDivider></MenuDivider>
//                   <MenuItem onClick={logoutHandler}>Log Out</MenuItem>{" "}
//                 </MenuList>
//               </Menu>
//             </div>
//           </Box>
//         </Flex>
//       </Box>
//       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Search Users</DrawerHeader>

//           <DrawerBody>
//             <Input
//               placeholder="Search by name or email"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             {loading ? (
//               <ChatLoading />
//             ) : (
//               searchResult?.map((user) => (
//                 <UserListItem
//                   key={user._id}
//                   user={user}
//                   handleFunction={() => accessChat(user._id)}
//                 />
//               ))
//             )}
//             {loadingChat && <Spinner ml="auto" d="flex" />}
//           </DrawerBody>

//           <DrawerFooter>
//             <Button colorScheme="blue" onClick={handleSearch}>
//               Search
//             </Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };
// export default SideDrawer;

import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import ChatLoading from "../ChatLoading";
import { Spinner } from "@chakra-ui/spinner";
import ProfileModal from "./ProfileModal";
import NotificationBadge, { Effect } from "react-notification-badge";

import { getSender } from "../../config/ChatLogics";
import UserListItem from "../useAvatar/UserListItem";
import { ChatState } from "../../Context/ChatProvider";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {
    setSelectedChat,
    user,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <div>
          <Menu>
            <MenuButton p={1}>
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
