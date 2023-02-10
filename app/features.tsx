import React from "react";
import { Box, Icon, Text, HStack, StackProps } from "@chakra-ui/react";
import { MBG, HFI, MSI } from "./icons";

interface FeatureProps extends StackProps {
    icon : ElementType;
}

function Feature(props : FeatureProps){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px'/>
            <Text textAlign="left" fontSize='18px' fontWeight='700'>{children}</Text>
        </HStack>
    )
}
export function Features(){
return (
    <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
    <HStack mx="48px" spacing='20px'>
        <Feature icon={MBG}>
        30 days money back Guarantee
        </Feature>
        <Feature icon={HFI}>
        No setup fees 100% hassle-free
        </Feature>
        <Feature icon={MSI}>
        No monthly subscription Pay once and for all
        </Feature>
    </HStack></Box>
)
}