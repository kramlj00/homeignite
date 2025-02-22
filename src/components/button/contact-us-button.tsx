"use client";

import Button from "./button";
import { BUTTON_SIZE } from "./button-size";
import { BUTTON_VARIANT } from "./button-variants.const";
import { CONTACT_SALES_ROUTE } from "@/constants";
import { useRouter } from "next/navigation";

interface IProps {
  size?: BUTTON_SIZE;
}

const ContactUsButton = ({ size }: IProps) => {
  const router = useRouter();
  return (
    <Button
      variant={BUTTON_VARIANT.PRIMARY}
      size={size}
      onClick={() => router.push(CONTACT_SALES_ROUTE)}
    >
      Contact us
    </Button>
  );
};

export default ContactUsButton;
