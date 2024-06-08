import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";

function AddUser({ isOpen, onClose }) {
  const rolesList =  {
    "roles": [
        {
            "roleName": "superadmin",
            "roleDescription": "Super Admin",
            "resources": [
                "app_home",
                "app_dashboard",
                "app_cart",
                "app_myproducts",
                "app_Settings",
                "app_profie",
                "app_subscription",
                "app_myblogs",
                "app_access",
                "app_accessmanagement",
                "app_payments",
                "app_orders",
                "app_edit_product"
            ]
        },
        {
            "roleName": "admin",
            "roleDescription": "Admin",
            "resources": [
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
            "roleName": "buyer",
            "roleDescription": "Buyer",
            "resources": [
                "app_home",
                "app_dashboard",
                "app_cart",
                "app_Settings",
                "app_profie",
                "app_subscription"
            ]
        },
        {
            "roleName": "seller",
            "roleDescription": "Seller",
            "resources": [
                "app_home",
                "app_cart",
                "app_Settings",
                "app_profie",
                "app_subscription",
                "app_myblogs",
                "app_dashboard",
                "app_myproducts"
            ]
        },
        {
            "roleName": "support",
            "roleDescription": "Support",
            "resources": [
                "app_myproducts",
                "app_cart",
                "app_profie",
                "app_Settings",
                "app_subscription",
                "app_myblogs",
                "app_orders"
            ]
        },
        {
            "roleName": "customer",
            "roleDescription": "Customer",
            "resources": [
                "app_home",
                "app_dashboard",
                "app_myproducts",
                "app_cart",
                "app_Settings",
                "app_profie",
                "app_subscription"
            ]
        },
        {
            "roleName": "Tes",
            "roleDescription": "Test",
            "resourcePermissions": {
                "app_dashboard": {
                    "view": true,
                    "create": true,
                    "edit": true,
                    "delete": true
                },
                "app_cart": {
                    "delete": false,
                    "view": true,
                    "create": true,
                    "edit": false
                },
                "test_res": {
                    "view": false,
                    "create": false,
                    "edit": false
                },
                "app_myproducts": {
                    "edit": true,
                    "delete": true
                }
            }
        },
        {
            "roleName": "Test role",
            "roleDescription": "role",
            "resourcePermissions": {
                "app_dashboard": {
                    "view": true,
                    "create": true,
                    "edit": true,
                    "delete": true
                },
                "app_cart": {
                    "view": true,
                    "create": true
                }
            }
        }
    ]
}
  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    // dispatch(fetchRolesRequest());
  }, []);

  useEffect(() => {
    if (Array.isArray(rolesList)) {
      setRoleList(rolesList);
    }
  }, [rolesList]);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") {
      // Find the selected role object from roleList
      const selectedRole = roleList.find((role) => role.roleName === value);
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: selectedRole, // Update role to be the entire role object
      }));
    } else {
      // For other input fields, update as before
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    // dispatch(actions.addUserRequest(userData));
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });

    onClose();
  };

  return (
    <>
      <Modal borderRadius="md" size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0648b3">Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                placeholder="First name"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastName"
                placeholder="Last name"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Role</FormLabel>
              <Select
                name="role"
                placeholder="Select role"
                value={userData.role ? userData.role.roleName : ""}
                onChange={handleInputChange}
              >
                {roleList.map((role) => (
                  <option key={role.roleName} value={role.roleName}>
                    {role.roleDescription}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              fontWeight="normal"
              size="sm"
              bg="#0648b3"
              color="white"
              onClick={handleAddUser} // Call handleAddUser function on Save button click
            >
              Save
            </Button>
            <Button size="sm" fontWeight="normal" ml={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUser;
