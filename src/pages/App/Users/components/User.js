import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Flex,
  Icon,
  Divider,
  Heading,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import AddUser from "./AddUser";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import EditUser from "./EditUser";

const UsersList = () => {
  const userList = [
    {
        "id": "impactdev@impact.com",
        "name": "Impact Dev",
        "firstName": "Impact",
        "lastName": "Dev",
        "email": "impactdev@impact.com",
        "password": "Password@1100",
        "role": "admin",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "21/03/2024",
        "updatedDate": "29/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_myproducts",
            "app_Settings",
            "app_profie",
            "app_subscription",
            "app_myblogs",
            "app_orders"
        ]
    },
    {
        "id": "kirandhanagundi@gmail.com",
        "name": "Kiran M",
        "firstName": "Kiran",
        "lastName": "M",
        "email": "kirandhanagundi@gmail.com",
        "password": "Peskiccha@95",
        "role": "admin",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "21/03/2024",
        "updatedDate": "28/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_myproducts",
            "app_Settings",
            "app_profie",
            "app_subscription",
            "app_myblogs",
            "app_orders"
        ]
    },
    {
        "id": "impactdev01@impact.com",
        "name": "Impact01 Dev",
        "firstName": "Impact01",
        "lastName": "Dev",
        "email": "impactdev01@impact.com",
        "password": "Password@1100",
        "role": "buyer",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "21/03/2024",
        "updatedDate": "28/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_Settings",
            "app_profie",
            "app_subscription"
        ]
    },
    {
        "id": "kirandhanagundi01@gmail.com",
        "name": "Kiran D",
        "firstName": "Kiran",
        "lastName": "D",
        "email": "kirandhanagundi01@gmail.com",
        "password": "Peskiccha@95",
        "role": "admin",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "22/03/2024",
        "updatedDate": "28/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_myproducts",
            "app_Settings",
            "app_profie",
            "app_subscription",
            "app_myblogs",
            "app_orders"
        ]
    },
    {
        "id": "testdev@impact.com",
        "name": "Test Dev",
        "firstName": "Test",
        "lastName": "Dev",
        "email": "testdev@impact.com",
        "password": "Password@1100",
        "role": "customer",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "27/03/2024",
        "updatedDate": "28/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_myproducts",
            "app_cart",
            "app_Settings",
            "app_profie"
        ]
    },
    {
        "id": "testuser@impact.com",
        "name": "User Test",
        "firstName": "User",
        "lastName": "Test",
        "email": "testuser@impact.com",
        "password": "Password@1100",
        "role": "customer",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "27/03/2024",
        "updatedDate": "29/03/2024",
        "about": "",
        "access": [
            "app_home",
            "app_dashboard",
            "app_myproducts",
            "app_cart",
            "app_Settings",
            "app_profie"
        ]
    },
    {
        "id": "kittys08091996@gmail.com",
        "name": "Kiran Test Otp",
        "firstName": "Kiran",
        "lastName": "Test Otp",
        "email": "kittys08091996@gmail.com",
        "password": "Peskiccha@95",
        "role": "user",
        "status": "inactive",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "30/04/2024",
        "updatedDate": "30/04/2024",
        "about": null,
        "access": "['app_home','app_profie',app_myproducts',app_myblogs','app_dashboard','app_cart',app_subscription']"
    },
    {
        "id": "kittys080919961@gmail.com",
        "name": "Kiran Otp Otp Test",
        "firstName": "Kiran Otp",
        "lastName": "Otp Test",
        "email": "kittys080919961@gmail.com",
        "password": "Pesk@123",
        "role": "user",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "30/04/2024",
        "updatedDate": "30/04/2024",
        "about": null,
        "access": "['app_home','app_profie',app_myproducts',app_myblogs','app_dashboard','app_cart',app_subscription']"
    },
    {
        "id": "Kirandhnagundi@gmail.com",
        "name": "Kiran MM",
        "firstName": "Kiran",
        "lastName": "MM",
        "email": "Kirandhnagundi@gmail.com",
        "password": "Peskiccha@95",
        "role": "user",
        "status": "active",
        "subscriptionType": "Free",
        "domain": "impact",
        "createdDate": "14/05/2024",
        "updatedDate": "14/05/2024",
        "about": null,
        "access": "['app_home','app_profie',app_myproducts',app_myblogs','app_dashboard','app_cart',app_subscription']"
    }
]

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [selectedUser, setSelectedUser] = useState(null);

  const {
    isOpen: isAddUserOpen,
    onOpen: onAddUserOpen,
    onClose: onAddUserClose,
  } = useDisclosure();
  const {
    isOpen: isEditUserOpen,
    onOpen: onEditUserOpen,
    onClose: onEditUserClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteUserOpen,
    onOpen: onDeleteUserOpen,
    onClose: onDeleteUserClose,
  } = useDisclosure();

  const handleEdit = (user) => {
    setSelectedUser(user);
    onEditUserOpen();
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    onDeleteUserOpen();
  };

  const handleDeleteSubmit = () => {
    // dispatch(actions.deleteUserRequest(selectedUser));
    onDeleteUserClose();
  };

  // Calculate current users to display based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box w="100%">
        <Heading align="left" as="h4" size="md" mb="10px">
          Users
        </Heading>
      </Box>
      <Box
        mt="10px"
        overflowY="auto"
        boxShadow="md"
        borderRadius="md"
        borderWidth="1px"
        minH="500px"
      >
        <Card p="2" w="100%" borderRadius="md">
          <Flex mb="5px">
            <Text color="#0648b3" fontWeight={"bold"}>
              User List
            </Text>
            <Spacer />
            <Button
              fontWeight="normal"
              borderRadius="md"
              bg="#0648b3"
              color="white"
              size="sm"
              onClick={onAddUserOpen}
            >
              Add User
            </Button>
          </Flex>
          <AddUser isOpen={isAddUserOpen} onClose={onAddUserClose} />
          <Divider />
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Domain</Th>
                <Th>Plan Type</Th>
                <Th>Status</Th>
                <Th>Updated Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers.map((user, index) => (
                <Tr key={user?.id}>
                  <Td>{index + 1 + indexOfFirstUser}</Td>
                  <Td>{user?.name}</Td>
                  <Td>{user?.email}</Td>
                  <Td>{user?.role}</Td>
                  <Td>{user?.domain}</Td>
                  <Td>{user?.subscriptionType}</Td>
                  <Td>{user?.status}</Td>
                  <Td>{user?.updatedDate}</Td>
                  <Td>
                    <Flex
                      direction={{ sm: "column", md: "row" }}
                      align="center"
                    >
                      <Button p="0px" bg="transparent">
                        <Flex
                          color={"gray.900"}
                          cursor="pointer"
                          align="center"
                          onClick={() => handleEdit(user)}
                        >
                          <Icon as={FaPencilAlt} me="4px" />
                        </Flex>
                      </Button>
                      <Button
                        p="0px"
                        bg="transparent"
                        mb={{ sm: "10px", md: "0px" }}
                        me={{ md: "12px" }}
                      >
                        <Flex
                          color="red.500"
                          cursor="pointer"
                          align="center"
                          p="12px"
                          onClick={() => handleDelete(user)}
                        >
                          <Icon as={FaTrashAlt} me="4px" />
                        </Flex>
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box align="start" mt={1}>
            {Array.from({
              length: Math.ceil(userList.length / usersPerPage),
            }).map((_, index) => (
              <Button
                size="sm"
                colorScheme="gray"
                key={index}
                onClick={() => paginate(index + 1)}
                mx={1}
              >
                {index + 1}
              </Button>
            ))}
          </Box>
        </Card>
      </Box>
      <EditUser
        isOpen={isEditUserOpen}
        onClose={onEditUserClose}
        user={selectedUser}
      />
      <Modal
        isOpen={isDeleteUserOpen}
        onClose={onDeleteUserClose}
        isCentered="true"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0648b3">Confirm Deletion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete user "{selectedUser?.name}"?
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              colorScheme="red"
              fontWeight="normal"
              mr={3}
              onClick={handleDeleteSubmit}
            >
              Delete
            </Button>
            <Button size="sm" fontWeight="normal" onClick={onDeleteUserClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default UsersList;
