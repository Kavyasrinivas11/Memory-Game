import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
function Landing() {
  return (
    <div>
         <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://slidechef.net/wp-content/uploads/2024/08/memory-game-template.jpg" alt="" style={{paddingTop:'50px'}} width="100%" height="600px" />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://storage.googleapis.com/ibw-blog/media/cc/aa4f1540f302d3d5ccef1fabd850f7.jpeg" alt="" width="100%" height="600px" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.holagames.io/public/site_content/quiz/ck_editor/images/Holagames/memory_game_900x465.jpg" style={{backgroundSize:'contain',paddingTop:'60px'}} alt="" width="100%" height="600px"/>
        
      </Carousel.Item>
    </Carousel>



<Box sx={{ backgroundColor: '#0b0b0d', py: 10, color: 'white' }}>
  <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
    Why Play on PixPlay?
  </Typography>

  <Typography align="center" sx={{ color: 'gray', mb: 6 }}>
    Play. Compete. Improve. — Discover what makes PixPlay the best place for casual and logic gamers!
  </Typography>

  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, px: 4 }}>
    {/* Feature 1 */}
    <Card sx={{ width: 320, textAlign: 'center', backgroundColor: '#1b1b1e', color: 'white', borderRadius: 4, p: 2 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://cdn-icons-png.flaticon.com/512/1067/1067357.png"
        alt="No Download"
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>🚀 Play Instantly</Typography>
        <Typography variant="body2" color="gray">
          No downloads, no sign-ups. Just pick a game and start playing instantly — anywhere, anytime!
        </Typography>
      </CardContent>
    </Card>

    {/* Feature 2 */}
    <Card sx={{ width: 320, textAlign: 'center', backgroundColor: '#1b1b1e', color: 'white', borderRadius: 4, p: 2 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://cdn2.iconfinder.com/data/icons/flat-game-ui-buttons-icons-1/512/17-1024.png"
        alt="Leaderboards"
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>🏆 Compete & Win</Typography>
        <Typography variant="body2" color="gray">
          Climb the leaderboard and earn badges for every game you master. Show off your skills!
        </Typography>
      </CardContent>
    </Card>

    {/* Feature 3 */}
    <Card sx={{ width: 320, textAlign: 'center', backgroundColor: '#1b1b1e', color: 'white', borderRadius: 4, p: 2 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://static.vecteezy.com/system/resources/previews/050/757/309/non_2x/light-bulb-icon-transparent-background-free-png.png"
        alt="Brain Training"
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>🧩 Train Your Brain</Typography>
        <Typography variant="body2" color="gray">
          Enjoy logic puzzles, memory games, and quick challenges designed to boost your thinking skills.
        </Typography>
      </CardContent>
    </Card>
  </Box>
</Box>





    
    </div>
  )
}

export default Landing