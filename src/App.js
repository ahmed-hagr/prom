//react
import React from "react";

//conrainer
import Container from "@mui/material/Container";

//tabs
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

//components
import "./App.css";
import CardComponent from "./Card.js";
import ProfileImage from "./img/profile-image.png";

//popUp
import PopUp from "./PopUp/popUp";

export default class Pomaco extends React.Component {
  state = {
    imageEncoded: null,

    selectedOption: "",
    multiSelect: [
      {
        value: "Ahmed",
        label: "Ahmed",
      },
      {
        value: "Amr",
        label: "Amr",
      },
      {
        value: "Amira",
        label: "Amira",
      },
      {
        value: "Kamal",
        label: "Kamal",
      },
    ],
    cardData: [
      {
        title: "Shrimp and Chorizo Paella",
        description:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        img:
          "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
        date: "2/sep/2022",
        assignee: "",
      },
      {
        title: "review code",
        description:
          "should review code before push it and reflect on server, be sure that writing code according design pattern",
        img: "https://unsplash.com/photos/eOCHCYouAPw",
        date: "6/jun/2023",
        assignee: "",
      },
    ],
    toggleMainModal: false,
    updateModeModal: false,
    header: "",
    component: () => <React.Fragment></React.Fragment>,
    myprops: {},
    closeIcon: false,
    modalId: null,
    updateEdit: false,
    updateComponent: false,
    toggle: false,
    headerModal: "",
    bodyModal: "",
    handleAction: () => {
      return;
    },
  };
  handleUpdateModeModal = () => {
    this.setState({
      toggleMainModal: false,
      updateModeModal: !this.state.updateModeModal,
    });
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
  };

  handleSubmitData = (data) => {
    const cardData = this.state.cardData;
    cardData.push(data);
    this.setState({
      cardData: cardData,
    });
  };

  imageReader = (file) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imageEncoded: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <section>
        <React.Fragment>
          <Container maxWidth false>
            <div class="d-flex">
              <div class="ml-2  col-1 logo-cont d-flex">
                <div className=" m-auto">
                  <span class="sr-only ">POMAC</span>
                  <p>Power of marketing & coding</p>
                </div>
              </div>

              <nav class="navbar navbar-expand navbar-light col-11 d-flex justify-content-between">
                <div
                  class="collapse navbar-collapse d-flex"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav  justify-content-between d-flex w-100">
                    <li className="">
                      <FormControl sx={{ width: "25ch" }}>
                        <OutlinedInput
                          outline="none"
                          size="small"
                          placeholder="search..."
                          startAdornment={
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </li>

                    <li className="">
                      <div class="d-flex">
                        <div className=" d-grid">
                          <label className="userName">Amr Khalil</label>
                          <small className="userViews">Admin</small>
                        </div>
                        <div class="position-relative d-inline-flex cont-Image">
                          <img
                            alt="img"
                            className="proileImg"
                            src={ProfileImage}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="d-flex">
              <div className="col-left-sm col-1 page-pos">
                <Tabs
                  orientation={"vertical"}
                  aria-label="Vertical tabs example"
                >
                  <Tab
                    label={
                      <React.Fragment>
                        <InsertChartOutlinedRoundedIcon />
                      </React.Fragment>
                    }
                  />
                  <Tab
                    label={
                      <React.Fragment>
                        <ViewInArOutlinedIcon />
                      </React.Fragment>
                    }
                  />
                  <Tab
                    label={
                      <React.Fragment>
                        <CalendarTodayIcon />
                      </React.Fragment>
                    }
                  />
                </Tabs>
              </div>

              <div className="col-11 bg-color">
                <div className="d-flex justify-content-between m-3 ">
                  <h4 className="col-sm-8 col-6 ">
                    Pomac Front End Technical Task
                  </h4>
                  <div className="col-5 col-sm-4 col-md-3 col-lg-2">
                    <PopUp
                      imageEncoded={this.state.imageEncoded}
                      handleimagereader={this.imageReader}
                      handleSubmitData={this.handleSubmitData}
                      handleSelectChange={this.handleSelectChange}
                      multiSelect={this.state.multiSelect}
                      selectedOption={this.state.selectedOption}
                    />
                  </div>
                </div>

                <div className="px-2 row col-12 card-component-parent">
                  <CardComponent cardData={this.state.cardData} />
                </div>
              </div>
            </div>
          </Container>
        </React.Fragment>
      </section>
    );
  }
}
