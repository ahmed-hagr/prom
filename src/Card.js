//task's cards
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfileImage from "./img/profile-image.png";

export default (props) => {
  console.log(props.cardData);

  return props.cardData.map((index) => {
    const onMediaFallback = (event) => (event.target.src = ProfileImage);
    return (
      <div className=" col-md-4 col-sm-6 col-12 card-cont">
        <div className="mb-3 mx-0">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
              subheader="Tasks"
            />
            {!index.img ? null : (
              <CardMedia
                component="img"
                height="194"
                image={index.img}
                onError={onMediaFallback}
              />
            )}
            <CardContent>
              <CardHeader title={index.title} />
              <Typography variant="body2" color="text.secondary">
                {index.description}
              </Typography>
              <Typography class="date-subTask">{index.date}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  });
};
