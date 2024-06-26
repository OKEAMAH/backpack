import { Box } from "@mui/material";
import { useCustomTheme } from "@coral-xyz/themes";
import {
  Header,
  SubtextParagraph,
  SecondaryButton,
  DangerButton,
} from "../../common";
import { useNavStack } from "../../common/Layout/NavStack";

export function ResetWelcome({ onClose }: { onClose: () => void }) {
  const theme = useCustomTheme();
  const nav = useNavStack();
  const onNext = () => {
    nav.push("reset-warning");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ margin: "24px" }}>
        <Header text="Forgot your password?" />
        <SubtextParagraph>
          We can’t recover your password as it is only stored on your computer.
          You can try more passwords or reset your wallet with the secret
          recovery phrase.
        </SubtextParagraph>
      </Box>
      <Box
        sx={{
          marginLeft: "16px",
          marginRight: "16px",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ mb: "16px" }}>
          <SecondaryButton
            label="Try More Passwords"
            onClick={onClose}
            style={{
              border: theme.custom.colors.borderButton,
            }}
          />
        </Box>
        <DangerButton label="Reset Secret Recovery Phrase" onClick={onNext} />
      </Box>
    </Box>
  );
}
