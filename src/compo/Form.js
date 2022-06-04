import React, { Component } from 'react'
import GeneratedSignature from './GeneratedSignature'


//Form Controlled Component
//Three Easy steps:
//1. Add HTML
//2. Assign the state
//3. Assign change handler

export class Form extends Component 
{

    constructor(props) 
    {
      super(props)
    
      this.state = {
         fullName: '',
         //Assign states
         job: '',
         phone: '',
         phoneLink: '',
         
         site: '',
         siteLink: '',

         //Address
         address: '',
         city: '',
         USState: '',
         postCode: '',
         mapsLink: '',

         //Social Media
         facebookLink: '',
         linkedinLink: '',
         youtubeLink: '',
      }
    }

    handleFullNameChange = (event) => {
      this.setState({
        fullName: event.target.value
      })
    }
    handleJobChange = (event) => {
      this.setState({
        job: event.target.value
      })
    }
    
    //handle phone change
    handlePhoneChange = (event) => {
      this.setState({
        phone: event.target.value
      })
    }

    //handle phone link change
    handlePhoneLinkChange = (event) => {
      this.setState({
        phoneLink: event.target.value
      })
    }
    //handle site change
    handleSiteChange = (event) => {
      this.setState({
        site: event.target.value
      })
    }
    //handle site link change
    handleSiteLinkChange = (event) => {
      this.setState({
        siteLink: event.target.value
      })
    }

    handleAddressChange = (event) => {
      this.setState({
        address: event.target.value
      })
    }

    //handle city
    handleCityChange = (event) => {
      this.setState({
        city: event.target.value
      })
    }
    //handle US State change
    handleUSStateChange = (event) => {
      this.setState({
        USState: event.target.value
      })
    }
    //post code change
    handlePostCodeChange = (event) => {
      this.setState({
        postCode: event.target.value
      })
    }
    handleMapsLinkChange = (event) => {
      this.setState({
        mapsLink: event.target.value
      })
    }
    //handle FB change
    handleFacebookLinkChange = (event) => {
      this.setState({
        facebookLink: event.target.value
      })
    }
    //handleLinkedIn change
    handleLinkedInLinkChange = (event) => {
      this.setState({
        linkedinLink: event.target.value
      })
    }
    //Handle YouTube change
    handleYouTubeLinkChange = (event) => {
      this.setState({
        youtubeLink: event.target.value
      })
    }

    handleSubmit = (event) => 
    {
      alert(`Your name: ${this.state.fullName}`);
      
      //Store data in object
      let data = {
         'fullName': this.state.fullName,
         //Assign states
         'job': this.state.job,
         'phone': this.state.phone,
         'phoneLink': this.state.phoneLink,
         
         'site': this.state.site,
         'siteLink': this.state.siteLink,

         //Address
         'address': this.state.address,
         'city': this.state.city,
         'USState': this.state.USState,
         'postCode': this.state.postCode,
         'mapsLink': this.state.mapsLink,

         //Social Media
         'facebookLink': this.state.facebookLink,
         'linkedinLink': this.state.linkedinLink,
         'youtubeLink': this.state.youtubeLink,
      }

      //console.log(data);

      event.preventDefault();
      
    }

    
  render() {
    

    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Full Name:</label>
          <input className="fullName" type="text" 
          value={this.state.fullName}
          onChange={this.handleFullNameChange} />
          <br />

          <label>Title/Job Position:</label>
          <input className="job" type="text" 
          value={this.state.job}
          onChange={this.handleJobChange} 
          placeholder="President, CEO, Accountant, etc"/>
          <br />

          <label>Phone:</label>
          <input className="phone" type="text" 
          value={this.state.phone}
          onChange={this.handlePhoneChange} 
          placeholder="530-000-0000, (530) 000-0000"/>
          <br />

          {/* <label>Phone Link:</label>
          <input className="phoneLink" type="text" 
          value={this.state.phoneLink}
          onChange={this.handlePhoneChange} 
          placeholder="http:\\www.phone.com"/>
          <br /> */}

          <label>Website Text:</label>
          <input className="site" type="text" 
          value={this.state.site}
          onChange={this.handleSiteChange} 
          placeholder="xorex.net"/>
          <br />

          <label>Website URL:</label>
          <input className="siteLink" type="text" 
          value={this.state.siteLink}
          onChange={this.handleSiteLinkChange} 
          placeholder="https://www.xorex.net"/>
          <br />

          <label>Address:</label>
          <input className="address" type="text" 
          value={this.state.address}
          onChange={this.handleAddressChange} />
          <br />

          <label>City:</label>
          <input className="city" type="text" 
          value={this.state.city}
          onChange={this.handleCityChange} />
          <br />

          <label>State:</label>
          <input className="USState" type="text" 
          value={this.state.USState}
          onChange={this.handleUSStateChange} />
          <br />

          <label>ZIP Code:</label>
          <input className="postCode" type="text" 
          value={this.state.postCode}
          onChange={this.handlePostCodeChange} />
          <br />

          <label>Maps URL:</label>
          <input className="mapsLink" type="text" 
          value={this.state.mapsLink}
          onChange={this.handleMapsLinkChange} />
          <br />

          <label>Facebook Profile URL:</label>
          <input className="fbLink" type="text" 
          value={this.state.facebookLink}
          onChange={this.handleFacebookLinkChange} />

          <br />

          <label>LinkedIn Profile URL:</label>
          <input className="linkedinLink" type="text" 
          value={this.state.linkedinLink}
          onChange={this.handleLinkedInLinkChange} />
          <br />

          <label>YouTube Channel URL:</label>
          <input className="ytLink" type="text" 
          value={this.state.youtubeLink}
          onChange={this.handleYouTubeLinkChange} />

          <br />
          <br />
          {/* <button type='submit'>Submit</button> */}
            
        </form>

        <br />

        <GeneratedSignature 
        theName={this.state.fullName}
        theJob={this.state.job}
        thePhone={this.state.phone}

        theSite={this.state.site}
        theSiteLink={this.state.siteLink}

        theAddress={this.state.address} 
        theCity={this.state.city}
        theState={this.state.USState}
        thePostCode={this.state.postCode}
        theMapsLink={this.state.mapsLink}

        theFacebook={this.state.facebookLink}
        theLinkedIn={this.state.linkedinLink}
        theYouTube={this.state.youtubeLink}
        />
        

      </>
    )
  }
}

export default Form