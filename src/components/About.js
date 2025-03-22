import solar from '../Images/solar.jpg'
//import { Modal } from 'antd';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import chimneys from '../Images/chimneys.jpg';
import products from '../Images/products.jpg';
import heatpumps from '../Images/heatpumps.jpg';
import geysers from '../Images/geysers.jpg';
import ETC from '../Images/ETC.jpg';
import OIP from '../Images/OIP.jpg';
const About = () => {
    return (
        <div className='about'>
        <div className='container'>
            <div className='row'>
                <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                        sx={{ height: 270 }}
                        image={ETC}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ETC SOLAR WATER HEATERS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ETC Solar Water Heaters Systems comes with three-layered evacuated glass tubes that provide insulation and outer wall is coated with high-grade absorption material. By these, the tubes absorb the maximum sunlight even in the cloudy season, results in continuous hot water for your home.
                            Supreme ETC solar water systems can be a cost-effective way to get continuous hot water for your home. ETC water heaters come with the advanced technology of three-layered evacuated glass tubes that provides the insulation and the outer wall is coated with high-grade absorption material. This arrangement helps to absorb the maximum sunlight to keep water warm for any weather conditions.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                        sx={{ height: 270 }}
                        image={geysers}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        ELECTRIC GEYSERS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Supreme Power Water Heaters today are known for high-quality energy-efficient products. Going forward with this commitment it has introduced state of the art New Generation Electric Water Heaters. Enameled heating element provides better protection and longer life. Enameled coated glass lined inner tank that gives corrosion resistance, high pressure withstanding capacity and high energy efficiency.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
                <Card sx={{ maxWidth: 345 }} className="card">
                    <CardMedia
                        sx={{ height: 270 }}
                        image={chimneys}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        CHIMNEYS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Supreme Flames Kitchen Chimneys imbibe the best technology and are designed to suit Indian kitchen conditions . Be it in performance, reliability or safety our kitchen chimneys working in the kitchen gives to a fresh breeze. With our feature rich and stunningly beautiful kitchen chimneys, we are redefining the way you cook. Our products have captured the heart of the customers, but we continue to push the boundaries of innovation to bring your imagination to life.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
                
            </div>
            </div>
            {/* <div className='container'>
            <div class="card">
                <h1 class="card-title">Welcome To Supreme Solar</h1>
                <p class="card-text">Supreme Products is one of the Leading Solar Water Heaters manufacturing companies in India, Based out of Bengaluru and established in the year 2004 and it has grown from a modest customer base to a trusted brand in the home appliances market across the country. We recently introduced Glass-Lined Solar Water Heating Systems into the market, it is an internationally renowned technology in Solar Water Heating Systems to help provide clean hot water. Our products are Supreme Solar Water Heaters (Evacuated Tube Collectors and Flat Plate Collectors), Supreme Solar Rooftop Solutions, Supreme Electric Geysers, Supreme Heat Pumps, Supreme Kitchen chimneys and more
                    Achieving 100% customer satisfaction.
                    Supplying quality products by assuring zero defects.
                    On time delivery of products to customers.
                    Satisfation value for money solution.
                    Supreme Solar GL ETC model Suitable for water hardness up to 4000 PPM
                    Supreme Solar Copper ETC model suitable for water hardness up to 1200 PPM
                    Supreme Solar SS 316L Grade ETC model suitable for Water Hardness up to 1000 PPM
                    Supreme Solar SS ETC 304L Grade model suitable for water hardness up to 400 PPM</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
           
            <img class="card-img-bottom"  src={solar} />
            </div>
            </div> */}
        </div>
    );
}



export default About;