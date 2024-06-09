import React, { useState, useEffect, useMemo } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";

const EditUser = ({ isOpen, onClose, user }) => {
  const [userData, setUserData] = useState({
    id: user?.id || "",
    name: user?.name || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    role: user?.role || "",
    domain: user?.domain || "",
    subscriptionType: user?.subscriptionType || "",
    status: user?.status || "",
    createdDate: user?.createdDate || "",
    updatedDate: user?.updatedDate || "",
    password: user?.password || "",
    access: user?.access || "",
    about: user?.about || "",
  });

  const rolesList = useMemo(
    () => ({
      roles: [
        {
          roleName: "superadmin",
          roleDescription: "Super Admin",
          resources: [
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
            "app_edit_product",
          ],
        },
        {
          roleName: "admin",
          roleDescription: "Admin",
          resources: [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_myproducts",
            "app_Settings",
            "app_profie",
            "app_subscription",
            "app_myblogs",
            "app_orders",
          ],
        },
        {
          roleName: "buyer",
          roleDescription: "Buyer",
          resources: [
            "app_home",
            "app_dashboard",
            "app_cart",
            "app_Settings",
            "app_profie",
            "app_subscription",
          ],
        },
        {
          roleName: "seller",
          roleDescription: "Seller",
          resources: [
            "app_home",
            "app_cart",
            "app_Settings",
            "app_profie",
            "app_subscription",
            "app_myblogs",
            "app_dashboard",
            "app_myproducts",
          ],
        },
        {
          roleName: "support",
          roleDescription: "Support",
          resources: [
            "app_myproducts",
            "app_cart",
            "app_profie",
            "app_Settings",
            "app_subscription",
            "app_myblogs",
            "app_orders",
          ],
        },
        {
          roleName: "customer",
          roleDescription: "Customer",
          resources: [
            "app_home",
            "app_dashboard",
            "app_myproducts",
            "app_cart",
            "app_Settings",
            "app_profie",
            "app_subscription",
          ],
        },
        {
          roleName: "Tes",
          roleDescription: "Test",
          resourcePermissions: {
            app_dashboard: {
              view: true,
              create: true,
              edit: true,
              delete: true,
            },
            app_cart: {
              delete: false,
              view: true,
              create: true,
              edit: false,
            },
            test_res: {
              view: false,
              create: false,
              edit: false,
            },
            app_myproducts: {
              edit: true,
              delete: true,
            },
          },
        },
        {
          roleName: "Test role",
          roleDescription: "role",
          resourcePermissions: {
            app_dashboard: {
              view: true,
              create: true,
              edit: true,
              delete: true,
            },
            app_cart: {
              view: true,
              create: true,
            },
          },
        },
      ],
    }),
    []
  );

  const [roleList, setRoleList] = useState([]);

  useEffect(() => {
    if (user) {
      setUserData({
        id: user?.id || "",
        name: user?.name || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        role: user?.role || "",
        domain: user?.domain || "",
        subscriptionType: user?.subscriptionType || "",
        status: user?.status || "",
        createdDate: user?.createdDate || "",
        updatedDate: user.updatedDate || "",
        password: user?.password || "",
        access: user?.access || "",
        about: user?.about || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (Array.isArray(rolesList.roles)) {
      setRoleList(rolesList.roles);
    }
  }, [rolesList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input name is 'role', find the selected role object
    if (name === "role") {
      const selectedRole = roleList.find((role) => role.roleName === value);
      // Update the user data with the selected role object
      setUserData((prevState) => ({
        ...prevState,
        [name]: selectedRole, // Store the entire role object
      }));
    } else {
      // For other input fields, update as usual
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleEditSubmit = () => {
    // dispatch(actions.editUserRequest(userData));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0648b3">Edit User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              placeholder=" First name"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Last Name</FormLabel>
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
              disabled
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              placeholder="Select Role"
              value={
                userData.role.roleName ? userData.role.roleName : userData.role
              }
              onChange={handleInputChange}
            >
              {roleList.map((role) => (
                <option key={role.roleName} value={role.roleName}>
                  {role.roleDescription}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Domain</FormLabel>
            <Input
              disabled
              name="domain"
              placeholder="Domain"
              value={userData.domain}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Subscription Type</FormLabel>
            <Input
              disabled
              name="subscriptionType"
              placeholder="Subscription Type"
              value={userData.subscriptionType}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              placeholder="Select Status"
              value={userData.status}
              onChange={handleInputChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            fontWeight="normal"
            size="sm"
            bg="#0648b3"
            color="white"
            onClick={handleEditSubmit}
          >
            Save
          </Button>
          <Button fontWeight="normal" size="sm" ml={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditUser;
