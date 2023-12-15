import { Grid, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <Grid
      container
      component={"header"}
      className={`container ${styles.headerContainer}`}
    >
      <Grid item>
        <IconButton>
          <Image
            src="/images/language.svg"
            alt="language"
            width={24}
            height={24}
          />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography className={styles.logIn}>Log in</Typography>
      </Grid>
      <Grid item>
        <Typography className={styles.signUp}>Sign up</Typography>
      </Grid>
      <Grid item>
        <IconButton>
          <Image
            src="/images/menu.svg"
            alt="menu"
            width={34.59}
            height={24.5}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
