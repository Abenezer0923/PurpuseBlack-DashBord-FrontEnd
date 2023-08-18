import React, { useState } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import "../../Modal.css";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  ArrowLeft,
  ArrowRight,
  ArrowBackSharp,
  ArrowForwardSharp,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  List
} from "@mui/material";
import { DataGrid, } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";



const Dashboard = () => {
  const [notiesModal, setNotiesModal] = useState(false);
  const [newsModal, setNewsModal] = useState(false);
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  
  const { data: user, isLoading } = useGetUserQuery(userId);  
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const toggleNotiesModal = () => {
    setNotiesModal(!notiesModal);
  };

  const toggleNewsModal = () => {
    setNewsModal(!newsModal);
  };

  if (notiesModal || newsModal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  const [showFullContent, setShowFullContent] = useState(false)
    const newss = "000Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut, autem exercitationem impedit reiciendis earum ipsum cum neque totam repellat! Expedita provident distinctio dolor ullam officia, laudantium repellat ducimus? Provident perferendis repellat in aliquam ut architecto ex sed qui, veniam voluptatem excepturi aspernatur perspiciatis velit minima sapiente rem tempore repellendus.";
    const slides = [
        {content : "000Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut, autem exercitationem impedit reiciendis earum ipsum cum neque totam repellat! Expedita provident distinctio dolor ullam officia, laudantium repellat ducimus? Provident perferendis repellat in aliquam ut architecto ex sed qui, veniam voluptatem excepturi aspernatur perspiciatis velit minima sapiente rem tempore repellendus."},
        {content: "123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut, autem exercitationem impedit reiciendis earum ipsum cum neque totam repellat! Expedita provident distinctio dolor ullam officia, laudantium repellat ducimus? Provident perferendis repellat in aliquam ut architecto ex sed qui, veniam voluptatem excepturi aspernatur perspiciatis velit minima sapiente rem tempore repellendus."},
        {content: "000Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aut, autem exercitationem impedit reiciendis earum ipsum cum neque totam repellat! Expedita provident distinctio dolor ullam officia, laudantium repellat ducimus? Provident perferendis repellat in aliquam ut architecto ex sed qui, veniam voluptatem excepturi aspernatur perspiciatis velit minima sapiente rem tempore repellendus."}

    ]

    const toggleReadMore = () => {
        setShowFullContent(!showFullContent);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gridColumnSpan = 4;
  const gridRowSpan = 3;

  // Calculate the dimensions of the box and iframe based on grid layout
  const boxWidth = gridColumnSpan * 250;  // Adjust the factor as needed
  const boxHeight = gridRowSpan * 150;   

  const trs = [
    { date: "2023-5-23", name: "You bought 10 and 1 shops from balckpurpose" },
    { date: "2023-4-22", name: "You bought 10 and 1 shops from balckpurpose" },
    { date: "2022-5-21", name: "You bought 10 and 1 shops from balckpurpose" },
    { date: "2020-2-11", name: "You bought 10 and 1 shops from balckpurpose" },
  ];
  const trs2 = [
    {name:"Transfer to PurposeBlackETH", balance:"1.5M ETB", date:"2023-5-23"},
    {name:"Transfer to PurposeBlackETH", balance:"1.5M ETB", date:"2023-5-23"}
  ];
  const columns = [
    {
      field: "_id",
      headerName: "History",
      flex: 2,
    },
    {
      field: "userId",
      headerName: <Button sx={{background:"#fff", color:"#000"}}>Show All</Button>,
      
    },
    
  ];

  return (
    <Box m="1.5rem 2.5rem" >
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="50px"
        
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Franchise"
          //user={data}
          increase="Buy"
          icon={
            <Email
              sx={{ color: "#000", fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Ordinary"
          value="0"
          increase="Buy"
          icon={
            <PointOfSale
              sx={{ color: "#000", fontSize: "26px" }}
            />
          }
        />
        
        <StatBox
          title="TSM"
          value="10,00"
          increase="Buy"
          icon={
            <PersonAdd
              sx={{ color: "#000", fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Total"
          value="110,00"
          increase="Buy"
          icon={
            <Traffic
              sx={{ color: "#000", fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p="1.25rem 1rem"
          backgroundColor= "#997b3f"
          borderRadius="0.55rem"
        >
          <Box
  display="flex"
  justifyContent="space-between"
  gridTemplateColumns="auto 1fr"
  alignItems="center"
>
  <Typography
    variant="h3"
    fontWeight="bold"
    sx={{
      backgroundColor: "#fff",
      color: "#000", 
      height: "40px",
      borderRadius: "0px",
      width:"200px",
      pt:".5rem",
      pl:".5rem",
      ml:"-1.4rem",
      mt:"-.7rem"

    }}
  >
    Noties Board
  </Typography>
  <Typography sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <ArrowBackSharp onClick={prevSlide} size={40} />
    <ArrowForwardSharp onClick={nextSlide} size={40} />
  </Typography>
</Box>

          
<Typography sx={{ marginBottom: "5rem" }} variant="h5" fontWeight="bold">
  {user && user.Noties[currentIndex] && (
    <div>
      {user.Noties[currentIndex].nots.length > 200 ? (
        <>
          {user.Noties[currentIndex].nots.slice(0, 200)}
          <span id="dots">...</span>
          <p onClick={toggleNotiesModal} className="btn-modal">
            Read More
          </p>
        </>
      ) : (
        user.Noties[currentIndex].nots
      )}
    </div>
  )}
  { notiesModal && notiesModal && user && user.Noties[currentIndex] && (
    <div className="modal">
      <div onClick={toggleNotiesModal} className="overlay"></div>
      <div className="modal-content">
        <h2 style={{ color: "#000" }}>Hello Modal</h2>
        <p style={{ color: "#000" }}>{user.Noties[currentIndex].nots}</p>
        <button className="close-modal" onClick={toggleNotiesModal}>
          CLOSE
        </button>
      </div>
    </div>
  )}
</Typography>
          <Typography 
          variant="h3"
          fontWeight="bold" sx={{backgroundColor:"#000", color:"#fff", width:"100%", paddingLeft:"4rem", borderRadius:"0.2rem"}}>
            Date 26/07/2023 - 26/08/2023
          </Typography>
          <Drawer anchor="left" sx={{color:"red"}}/>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p="1.25rem 1rem"
          backgroundColor= "#997b3f"
          borderRadius="0.55rem"
        >
          <Typography 
          variant="h3"
          fontWeight="bold"
          ml="21.7rem"
          mt="-2rem"         
          sx = {{backgroundColor:"#000", color: "#fff" , width:"200px", height:"40px", paddingTop:".1rem", paddingLeft:".6rem",borderRadius:"0px"}}
>
            What's New
          </Typography>
          <Typography variant="h5"
          fontWeight="bold">
            {newss.length > 200
                        ?<>
                           {newss.slice(0,200)}<span id="dots">...</span>
                        </>
                        :newss            
          }
        { newsModal &&(
        <div className="modal">
          <div onClick={toggleNewsModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{color:"#000"}}>News</h2>
            <p style={{color:"#000"}}>
              {newss}
            </p>
            <button className="close-modal" onClick={toggleNewsModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
          </Typography>
          <Typography>
          <button onClick={toggleNewsModal} className="btn-modals">Read More</button>
          </Typography>
        </Box>
        <Box gridColumn="span 6"
            gridRow="span 2" 
            p="0rem 0rem"
            color="#000"
            backgroundColor="#cecaca"
            borderColor="#000"
            borderRadius="0.55rem">
            <Box display="flex"
            flexDirection="row" justifyContent="space-between" >
              <Box mt="2rem" ml="2rem" display="flex" alignItems="flex-start" gap="0.5rem" flexDirection="column" justifyContent="space-between" color={"#fff"}>
              <Typography sx={{ m: "0 0 0rem 1rem" , color:"#000"}}>History</Typography>
              </Box>
              <Box mt="2rem" mr="3rem" display="flex" alignItems="flex-start" justifyContent="flex-end" marginLeft="auto" > 
                <Button sx={{color:"#000", backgroundColor:"#fff", borderRadius:"20%"}}>Show All</Button>
              </Box>
            </Box>
            <Box>
              <List>
                {trs.map(({ date, name }) => (
                  <div key={name} style={{display:"flex"}}>
                    <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {name}
                    </Typography>
                    <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {date}
                    </Typography>
                  </div>
                ))}
              </List>
            </Box>
            
        </Box>


        <Box gridColumn="span 6"
          gridRow="span 1.5"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p="1.25rem 1rem"
          backgroundColor= "#997b3f"
          borderRadius="0.55rem">
            <Box backgroundColor="#fff" width="160px" ml="10rem" mt="-1.3rem" borderRadius="10%" >
              <Typography  sx={{ m: "0 0 0rem 1rem" , color:"#000", fontSize:"25px" }}>Dividend</Typography>
            </Box>
            <Box ml="7rem" mt="2rem">
              <Typography>Congrats, you have got 10% ETB dividend<br/> <p style={{marginLeft:"3rem"}}>your total amount of share</p></Typography>
            </Box>

        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          borderRadius="0.55rem"
          position="relative"  
          overflow="hidden"
        >
         
          
         <iframe
          width="100%"  
          height="100%"
          src="https://www.youtube.com/embed/bLO7zv73wDw"
          title="ፐርፐዝብላክ ሳምንታዊ ዜና (ነሀሴ 7, 2015 ዓ.ም) Purpose Black Ethiopia S.C 13 2023 news"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </Box>
        <Box gridColumn="span 6"
            gridRow="span 2" 
            p="0rem 0rem"
            color="#000"
            backgroundColor="#cecaca"
            borderColor="#000"
            borderRadius="0.55rem">
            <Box display="flex"
            flexDirection="row" justifyContent="space-between" >
              <Box mt="2rem" ml="2rem" display="flex" alignItems="flex-start" gap="0.5rem" flexDirection="column" justifyContent="space-between" color={"#fff"}>
              <Typography sx={{ m: "0 0 0rem 1rem" , color:"#000",}}>Latest Transactions</Typography>
              </Box>
              <Box mt="2rem" mr="3rem" display="flex" alignItems="flex-start" justifyContent="flex-end" marginLeft="auto" > 
                <Button sx={{color:"#000", backgroundColor:"#fff", borderRadius:"20%"}}>Show All</Button>
              </Box>
            </Box>
            <Box>
              <List>
                {trs2.map(({ name , balance, date }) => (
                  <div key={name} style={{display:"flex"}}>
                    <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {name}
                    </Typography>
                    <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {balance}
                    </Typography>
                    <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {date}
                    </Typography>
                  </div>
                ))}
              </List>
            </Box>
            
        </Box>
      
      </Box>
    </Box>
  );
};

export default Dashboard;
