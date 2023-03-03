export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            start: undefined;
            home : undefined;
            newCharacter : undefined;
            showCharacter : { charInfo : CharProps };
            upCharacter : { charInfo : CharProps };
            showInventory : { charInventory : CharInventory[]};
        }
    }
}