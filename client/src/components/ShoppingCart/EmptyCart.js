import { Stack, Image, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import cart from "../../"
const EmptyCart = () => {
  return (
    <Stack>
      <Title
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
        })}
        mb="lg"
      >
        Your cart is empty!
      </Title>
      <Image
        mb={0}
        fit="contain"
        sx={(theme) => ({
          margin: "auto",
          width: "350px !important",
          height: "350px !important",
          [theme.fn.smallerThan("sm")]: {
            width: "90%",
            height: "auto",
          },
        })}
        src="https://gibbonnutrition.com/img/empty-cart-yellow.png"
        alt="Empty Cart"
      />
      <Text my="lg">
        Looks like you haven't added any pizza items to your cart yet.
      </Text>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </Stack>
  );
};

export default EmptyCart;
