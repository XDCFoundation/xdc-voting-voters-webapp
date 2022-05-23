import React, { useState, useEffect } from "react";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { history } from "../../managers/history";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { validationsMessages } from "../../constants/index";
import { Tooltip } from "@material-ui/core";
import Header from "../header/header";
import Fade from "@material-ui/core/Fade";
import Jazzicon from "react-jazzicon";
import { toast, Toaster } from "react-hot-toast";
import commonToasts from "../../common/components/commonToasts";
import Popup from "./Popup";
import Loader from "../../assets/styles/images/NewLoader.gif";

const MainContainer = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 300px;
  background: url("./images/banner_new.png") 0% 0% no-repeat padding-box;
  background-size: 100% 300px;
  opacity: 1;
`;

const AddressGroupTabs = styled.div`
  width: 100%;
  height: 62px;
  padding: 0px 15px 0px 23px;
  display: flex;
  align-items: center;
  border: 1px solid #e3e7eb;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 0px;
  color: black;
  justify-content: space-between;
  background-color: ${(props) => (props.activeColor ? "#2149B9" : "white")};
  color: ${(props) => (props.activeColor ? "white" : "black")};
  position: relative;
`;

const Groupbtn = styled.div`
  cursor: pointer;
  height: 32px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
`;

const Addressbtn = styled.div`
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 20px;
`;

const AddButton = styled.button`
  all: unset;
  text-align: center;
  width: 123px;
  height: 32px;
  color: #2149b9;
  font-size: 18px;
  letter-spacing: 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
`;

const AddrContainer = styled.div`
  display: flex;
`;

const GrpContainer = styled.div`
  font-weight: 500;
  /* padding: 0px 55px; */
  padding-left: 90px;
  padding-right: 48px;
  width: 100%;
`;

const Addrgrp = styled.div`
  font-weight: 500;
  width: 450px;
  border-right: 1px solid #e3e7eb;
  height: 658px;
`;

const AddressContainer = styled.div`
  margin-top: 21px;
  max-width: 1280px;
  height: 728px;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  opacity: 1;
  margin-inline: auto;
  background-color: #ffffff;
  @media (min-width: 1025px) and (max-width: 1450px) {
    max-width: 95%;
  }
`;

const GroupContainer = styled.div`
  height: 69px;
  border: 1px solid #e3e7eb;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const AddressItem = styled.div`
  height: 61px;
  /* background: #ffffff 0% 0% no-repeat padding-box; */
  /* opacity: 1; */
  border-bottom: 1px solid #e3e7eb;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Back = styled.div`
  margin-left: 16px;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
  @media (min-width: 1025px) and (max-width: 1450px) {
    max-width: 95%;
  }
`;

const IconImg = styled.img`
  margin: 0 17.75px 0 0;
  width: 27px;
  height: 27px;
`;

const AddressDiv = styled.div`
  color: #2a2a2a;
  font-size: 16px;
  letter-spacing: 0px;
  opacity: 1;
  font-family: "Inter", sans-serif;
`;

const RenameImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -80px;
`;

const RenameImgNull = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const AddressImgCorrect = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 22px;
`;

const AddressImgCancel = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 15px;
`;

const InputImg = styled.img`
  margin-left: -44px;
  width: 27px;
  height: 27px;
`;

const BackButton = styled.div`
  display: flex;
  max-width: 1280px;
  margin: auto;
  @media (min-width: 1025px) and (max-width: 1450px) {
    max-width: 95%;
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
`;

const LoaderWrapper = styled.div`
  width: 216px;
  height: 160px;
  background: #000000 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 0.5;
  display: grid;
  place-items: center;
  padding-top: 40px;
`;

const LoaderText = styled.div`
  color: #ffffff;
`;
const DeleteImg = styled.img`
  margin-left: 1vh;
`;

const AddrHead = styled.div``;

const BackImg = styled.img``;

const CopyImg = styled.img``;

const CopyDeleteIcons = styled.div``;

const addressesList = [
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58dscdd0482a0b",
    groupType: "Top Decision Makers",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58fdcvf0482a0b",
    groupType: "Top Decision Makers",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58erfds0482a0b",
    groupType: "Top Decision Makers",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58fgvbn0482a0b",
    groupType: "Top Decsion Makers",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },

  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58ftyfg0482a0b",
    groupType: "Management",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58sdcxx0482a0b",
    groupType: "Management",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58werty0482a0b",
    groupType: "Management",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58ertyu0482a0b",
    groupType: "Management",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58rtyui0482a0b",
    groupType: "Employees",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58tyuio0482a0b",
    groupType: "Employees",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },

  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58yuiop0482a0b",
    groupType: "Employees",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58uiopa0482a0b",
    groupType: "Employees",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6123456789433a58iopas0482a0b",
    groupType: "Employees",
    dltImage: "/images/Delete_Address.png",
    copyImage: "/images/Copy_Address.png",
  },
];

const groupList = [
  {
    groupName: "Top Decision Makers",
    image: "/images/nft_pic.png",
  },
  {
    groupName: "Management",
    image: "/images/nft_pic.png",
  },
  {
    groupName: "Employees",
    image: "/images/nft_pic.png",
  },
];

const AddressGroup = () => {
  const [addressNamelist, setaddressNamelist] = React.useState(groupList);

  const [addGroupInput, setAddGroupInput] = useState("New Group");
  const [renameGroup, setRenameGroup] = useState("");
  const [showRenameInput, setShowRenameInput] = useState(null);

  const [selectedGroupAddress, setSeletedGroupAddresses] = useState(
    "Top Decision Makers"
  );
  const [addAddress, setAddAddress] = React.useState(addressesList);

  const [addAddressesInput, setaddAddressesInput] = useState("Add Address");
  const [showAddAddressesInput, setShowAddAddressesInput] = useState(false);

  const [togglePopPop, settogglePopPop] = useState(null);
  const [copySuccess, setCopySuccess] = React.useState(false);

  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [timedPopup, setTimedPopup] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoader, setLoader] = useState(false);

  const [groupNameData, setGroupNameData] = useState("");
  const [addrNameData, setAddrNameData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  const deleteGroupHandler = (value) => {
    settogglePopPop(null);
    setButtonPopup(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const newData = addressNamelist.filter(
        (item) => item.groupName !== value
      );
      setaddressNamelist(newData);
      commonToasts.successToast(validationsMessages.GROUP_DELETED);
    }, 3000);
  };

  const deleteAddrHandler = (value) => {
    setButtonPopup(false);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      const newDatas = addAddress.filter((item) => item.address !== value);
      setAddAddress(newDatas);
      commonToasts.successToast(validationsMessages.ADDR_DELETED);
    }, 3000);
  };

  const addgrouphandler = () => {
    setaddressNamelist([...addressNamelist, { groupName: addGroupInput }]);
    commonToasts.successToast(validationsMessages.GROUP_CREATED);
  };
  const addaddresshandler = () => {
    setAddAddress([
      ...addAddress,
      {
        address: addAddressesInput,
        groupType: selectedGroupAddress,
        image: "/images/nft_pic.png",
      },
    ]);
    commonToasts.successToast(validationsMessages.ADDRESS_CREATED);
    setShowAddAddressesInput(!showAddAddressesInput);
  };

  const toggleRenameInputHandler = (index) => {
    settogglePopPop(null);
    if (showRenameInput === index) {
      setShowRenameInput(null);
      commonToasts.successToast(validationsMessages.ADDRESS_CREATED);
    } else {
      setShowRenameInput(index);
    }
  };

  const togglePopPophandler = (index) => {
    if (togglePopPop === index) {
      settogglePopPop(null);
    } else {
      settogglePopPop(index);
    }
  };

  const isDataCopied = () => {
    setCopySuccess(false);
  };

  const backButton = () => {
    history.push("/");
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <MainContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <div style={{ marginTop: "-120px", width: "100%" }}>
          <BackButton>
            <BackImg onClick={backButton} src="/images/Back-Arrow.svg" />
            <Back>Back</Back>
          </BackButton>
          <AddressContainer>
            <GroupContainer>
              <AddrHead className="addressgrp">Address Group</AddrHead>
              <Addressbtn>
                <Groupbtn>
                  <img src={addgrouphandler.image} />
                  <AddButton onClick={addgrouphandler}>New Group</AddButton>
                </Groupbtn>
                <AddButton
                  onClick={() => {
                    setShowAddAddressesInput(!showAddAddressesInput);
                  }}
                >
                  Add Address
                </AddButton>
              </Addressbtn>
            </GroupContainer>

            <AddrContainer>
              <Addrgrp style={{ position: "relative" }}>
                {addressNamelist.map((item, index) => (
                  <>
                    {showRenameInput === index ? (
                      <div>
                        <input
                          type="text"
                          className="groupInput"
                          onChange={(e) => setRenameGroup(e.target.value)}
                        />
                        <RenameImg
                          onClick={() => {
                            item["groupName"] = renameGroup;
                            toggleRenameInputHandler(null);
                            commonToasts.successToast(
                              validationsMessages.GROUP_RENAMED
                            );
                          }}
                          src="/images/green_correct.png"
                        />
                        <RenameImgNull
                          onClick={() => setShowRenameInput(null)}
                          src="/images/red_cancel.png"
                        />
                      </div>
                    ) : (
                      <AddressGroupTabs
                        onClick={() => {
                          setSeletedGroupAddresses(item.groupName);
                          setGroupNameData(item.groupName);
                        }}
                        activeColor={selectedGroupAddress === item.groupName}
                      >
                        {item.groupName}
                        <img
                          onClick={() => togglePopPophandler(index)}
                          src="/images/Option_Vertical.png"
                        />
                        {togglePopPop === index && (
                          <div className="popOver">
                            <p
                              onClick={() => toggleRenameInputHandler(index)}
                              className="popoverItems"
                            >
                              Rename
                            </p>

                            <p
                              onClick={() => setButtonPopup(true)}
                              className="popoverItems"
                            >
                              Delete
                            </p>
                            <Popup
                              groupName={item.groupName}
                              deleteGroupHandler={deleteGroupHandler}
                              trigger={buttonPopup}
                              setTrigger={setButtonPopup}
                            >
                              <h3 className="delete-text">
                                Delete Address Group {groupNameData}
                              </h3>
                              <p className="group-text">
                                Do you want to delete Address Group?
                              </p>
                            </Popup>
                          </div>
                        )}
                      </AddressGroupTabs>
                    )}
                  </>
                ))}
              </Addrgrp>

              <GrpContainer>
                <>
                  {showAddAddressesInput && (
                    <div>
                      {/* <Jazzicon 
                            diameter={27}
                            seed={Math.round(Math.random() * 10000000)}
                          /> */}
                      <InputImg src="/images/nft_pic.png" />
                      <input
                        type="text"
                        placeholder="Add Address"
                        className="addressInput"
                        onChange={(e) => setaddAddressesInput(e.target.value)}
                      />
                      <AddressImgCorrect
                        onClick={addaddresshandler}
                        src="/images/green_correct.png"
                      />
                      <AddressImgCancel
                        onClick={() =>
                          setShowAddAddressesInput(!showAddAddressesInput)
                        }
                        src="/images/red_cancel.png"
                      />
                    </div>
                  )}
                  {addAddress
                    .filter((item) => item.groupType === selectedGroupAddress)
                    .map((item) => (
                      <AddressItem className="address-item">
                        <AddressDiv>
                          <div
                            style={{
                              width: "0px",
                              height: "0px",
                              marginLeft: "-44px",
                            }}
                          >
                            <Jazzicon
                              diameter={27}
                              seed={Math.round(Math.random() * 10000000)}
                            />
                          </div>
                          {/* <IconImg src={item.image} /> */}
                          {item.address}
                        </AddressDiv>
                        <CopyDeleteIcons className="icons">
                          <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 2000 }}
                            placement="top"
                            title="copied"
                            text={item.address}
                          >
                            <CopyToClipboard text={item.address}>
                              <CopyImg
                                onClick={isDataCopied}
                                src={item.copyImage}
                              />
                            </CopyToClipboard>
                          </Tooltip>

                          <DeleteImg
                            onClick={() => {
                              setButtonPopup(true);
                              setAddrNameData(item.address);
                            }}
                            src={item.dltImage}
                          />
                          <Popup
                            address={item.address}
                            deleteAddrHandler={deleteAddrHandler}
                            trigger={buttonPopup}
                            setTrigger={setButtonPopup}
                          >
                            <h3 className="delete-text">
                              Delete Addressess {addrNameData.substr(0, 11)}
                              {/* Delete Addressess  {addrNameData.substring(0,7)} */}
                            </h3>
                            <p className="group-text">
                              Do you want to delete Addressess?
                            </p>
                          </Popup>
                        </CopyDeleteIcons>
                      </AddressItem>
                    ))}
                </>
              </GrpContainer>
            </AddrContainer>

            <div></div>
          </AddressContainer>
        </div>

        <div className="footer-all">
          <FooterComponent />
        </div>
      </MainContainer>
      {isLoading && (
        <LoaderContainer>
          <LoaderWrapper>
            <div className="loader-spinner"></div>
            <LoaderText>Deleting Address Group</LoaderText>
          </LoaderWrapper>
        </LoaderContainer>
      )}
      {isLoader && (
        <LoaderContainer>
          <LoaderWrapper>
            <div className="loader-spinner"></div>
            <LoaderText>Deleting Address List</LoaderText>
          </LoaderWrapper>
        </LoaderContainer>
      )}
    </>
  );
};

export default AddressGroup;
