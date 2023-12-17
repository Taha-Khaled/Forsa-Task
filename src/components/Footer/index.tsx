import { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import { Box, List, ListItem } from "@mui/material";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <Box component={"footer"} className={styles.footerContainer}>
      <Box className={styles.listsWrapper}>
        <Box className={styles.linksList}>
          <List className={styles.list}>
            <ListItem className={styles.title}>Navigate</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Properties</ListItem>
            <ListItem>Company</ListItem>
          </List>
          <List className={`${styles.list} ${styles.midList}`}>
            <ListItem className={styles.title}>Support</ListItem>
            <ListItem>Terms and conditions</ListItem>
            <ListItem>FAQs</ListItem>
            <ListItem>Contact us</ListItem>
          </List>
        </Box>
        <Box>
          <List className={styles.list}>
            <ListItem className={styles.title}>Social</ListItem>
            <Box className={styles.socialMedia}>
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                height={18.25}
                width={9.48}
              />
              <Image
                src={"/images/instagram.svg"}
                alt="facebook"
                height={17.35}
                width={17.35}
              />
              <Image
                src={"/images/twitter.svg"}
                alt="facebook"
                height={17.35}
                width={21.35}
              />
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
