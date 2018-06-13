import React, { Component } from 'react';
import {Button,Form,Input,Row,Col,Select,Radio} from 'antd'
import Autocomplete from 'react-google-autocomplete'
import './App.css';


const Option = Select.Option
const RadioGroup = Radio.Group

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            keywords: '',
            category: 'default',
            distance: '',
            place_from:'',
            place_from_input:''
        }
    }
    handleChange(type,e,){
        const value = e.target ? e.target.value : e.props ? e.props.value : e
        this.setState({
            [type]:value
        })
    }

    searchPlace() {
        console.log("start")
     fetch(`http://127.0.0.1:2001`, {
         method: 'POST',
     })
         .then(function (res) {
             if(res.status=== 200)
             console.log("successful")
         })


    }

    render() {
        let {
            keywords,category,distance,place_from,place_from_input
        }= this.state
        return(
            <div className="container" >
                <div className="title">
                    <span>Travel and Entertainment Search</span>
                </div>
                <div className="form_content">
                    <Form>
                        <Row gutter={10} className="row">
                            <Col span={5}>
                                <span className="must--input">Keywords</span>
                            </Col>
                            <Col span={8}>
                                <Input type="text"
                                       value={keywords}
                                       onChange={(e)=>this.handleChange('keywords',e)}
                                       style={{width:'22rem'}}/>
                            </Col>
                        </Row>
                        <Row gutter={16} className="row">
                            <Col span={5}>
                                <span>Category</span>
                            </Col>
                            <Col span={8}>
                                <Select defaultValue="default"
                                        value={category}
                                        style={{width:'16rem'}}
                                        onChange={(e)=>this.handleChange('category',e)}>
                                    <Option value="default">Default</Option>
                                    <Option value="amusement_park">Amusement Park</Option>
                                    <Option value="aquarium">Aquarium</Option>
                                    <Option value="art_gallery">Art Gallery</Option>
                                    <Option value="atm">Atm</Option>
                                    <Option value="bakery">Aakery</Option>
                                    <Option value="bar">Bar</Option>
                                    <Option value="beauty_salon">Beauty Salon</Option>
                                    <Option value="bowling_alley">Bowling Alley</Option>
                                    <Option value="bus_station">Bus Station</Option>
                                    <Option value="cafe">Cafe</Option>
                                    <Option value="campground">Campground</Option>
                                    <Option value="car_rental">Car Rental</Option>
                                    <Option value="casino">Casino</Option>
                                    <Option value="lodging">Lodging</Option>
                                    <Option value="movie_theater">Movie Theater</Option>
                                    <Option value="museum">Museum</Option>
                                    <Option value="night_club">Night Club</Option>
                                    <Option value="park">Park</Option>
                                    <Option value="parking">Parking</Option>
                                    <Option value="restaurant">Restaurant</Option>
                                    <Option value="shopping_mall">Shopping Mall</Option>
                                    <Option value="stadium">Stadium</Option>
                                    <Option value="subway_station">Subway Station</Option>
                                    <Option value="texi_stand">Texi Stand</Option>
                                    <Option value="train_station">Train Station</Option>
                                    <Option value="transit_station">Transit Station</Option>
                                    <Option value="travel_agency">Travel Agency</Option>
                                    <Option value="zoo">Zoo</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} className="row">
                            <Col span={5}>
                                <span>Distance(miles)</span>
                            </Col>
                            <Col span={8}>
                                <Input type="text"
                                       value={distance}
                                       onChange={(e)=>this.handleChange('distance',e)}
                                       style={{width:'16rem'}}/>
                            </Col>
                        </Row>
                        <Row gutter={16} className="row">
                            <Col span={5}>
                                <span className="must--input">From</span>
                            </Col>
                            <Col span={8}>
                                <RadioGroup  value={place_from}
                                             onChange={(e)=>this.handleChange('place_from',e)}>
                                    <Radio value={true}>Current Location</Radio>
                                    <Radio value={false}>Other,Please speciify</Radio>
                                </RadioGroup>
                            </Col>
                        </Row>
                        <Row gutter={16} className="row">
                            <Col span={6}>
                            </Col>
                            <Col span={14}>
                                {/*<Input type="text"*/}
                                       {/*onChange={(e)=>this.handleChange('place_from_input',e)}*/}
                                       {/*value={place_from_input} disabled={place_from||place_from===""}/>*/}
                                <Autocomplete
                                    style={{width: '90%'}}
                                    onPlaceSelected={(place) => {
                                        console.log(place);
                                    }}
                                    types={['(regions)']}
                                   disabled={place_from||place_from===''}
                                />
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col span={5}>
                                <Button type="primary" icon="search"
                                        style={{width:'6rem'}}
                                        onClick={this.searchPlace()}>Search
                                </Button>
                            </Col>
                            <Col span={3}>
                                <Button type="default"
                                >Clear</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>



        )}

}

export default App;
