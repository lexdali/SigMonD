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
      
      //alert(`Your name: ${this.state.fullName}`);
      console.log(event);

      //Store data in object
      // let data = {
      //    'fullName': this.state.fullName,
      //    //Assign states
      //    'job': this.state.job,
      //    'phone': this.state.phone,
      //    'phoneLink': this.state.phoneLink,
         
      //    'site': this.state.site,
      //    'siteLink': this.state.siteLink,

      //    //Address
      //    'address': this.state.address,
      //    'city': this.state.city,
      //    'USState': this.state.USState,
      //    'postCode': this.state.postCode,
      //    'mapsLink': this.state.mapsLink,

      //    //Social Media
      //    'facebookLink': this.state.facebookLink,
      //    'linkedinLink': this.state.linkedinLink,
      //    'youtubeLink': this.state.youtubeLink,
      // }

      let sig = this.ReturnGeneratedSignature();

      const blob = new Blob([sig], {type: "text/html"});
      const href = URL.createObjectURL(blob);

      const a = Object.assign(document.createElement('a'), {href, style:"display:none", download:`${this.state.fullName} Signature by Xorex Media.html`});

      document.body.appendChild(a);

      a.click();

      //Cleanup!!!
      URL.revokeObjectURL(href);
      a.remove();

      //console.log(data);

      event.preventDefault();
      
    }

    ReturnGeneratedSignature = () => {
      const sig = 
      `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="x-ua-compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      </head>
      <body>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="main01">
        <tbody>
          <tr>
            <td height="5" style="font-size:1px; line-height:1px;"></td>
          </tr>
          <tr class="cool">
              <td>
      <!-- WHERE YOU DID IT-->          <table width="350" border="0" cellspacing="0" cellpadding="0" align="left" style="max-width:750px;">
                <tbody> <!-- Disclosures Ahead! -->
                  <tr>
                    <td>
                      <table class="cool" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                              <td align="left" valign="middle" width="140"><a href=${this.state.siteLink} target="_blank"><img src="https://i.postimg.cc/syQwRMBv/logo.png" width="140" height="103" alt="logo" border="0" style="width: 140px; height: 103px; border: none; display: inline-block;"></a></td>
                              <td width="10" style="font-size: 1px; line-height: 1px;"></td>
                              <td style="border-left: 1px solid #042248; padding-left: 10px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align:left;">
                                  <tbody>
                                    <tr>
                                      <td align="left" style="font-family: Arial, Gotham, Verdana, Helvetica, sans-serif; font-size:14pt; line-height:120%; color: #042248; text-align:left;"><strong>${this.state.fullName}</strong> | <span style="font-size: 10pt; color: #a99b52;">${this.state.job}</span></td>
                                    </tr>
                                    <tr>
                                      <td height="8" style="font-size:1px; line-height:1px;"></td>
                                    </tr>
                                    <tr>
                                      <td valign="top" align="left" style="font-family: Arial, Gotham, Verdana, Helvetica, sans-serif; font-size:11px; line-height:150%; color:#403e3f; text-align:left; font-weight:normal;"><img src="https://i.postimg.cc/VYfKy4M8/call.png" alt="call" width="11" height="11" style="border:none;width: 11px; height: 11px;">&nbsp;&nbsp;<a href="tel:" style="color:#403e3f; text-decoration:none !important; text-decoration-color: #FFFFFF;">${this.state.phone}</a><br>
                                        <img src="https://i.postimg.cc/92NJSdQ6/web.png" alt="web" width="11" height="11" style="border:none; width: 11px; height: 11px;">&nbsp;&nbsp;<a href=${this.state.site} target="_blank" style="color: #403e3f; text-decoration:none !important; text-decoration-color: #FFFFFF;">${this.state.site}</a><br><img src="https://i.postimg.cc/HYj3nxBv/location.png" alt="web" width="11" height="11" style="border:none; width: 11px; height: 11px;"><a style="color: #403e3f; text-decoration:none !important; text-decoration-color: #FFFFFF;" href=${this.state.mapsLink} target="_blank">&nbsp;&nbsp;${this.state.address}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${this.state.city}, ${this.state.USState} ${this.state.postCode}</a>
      
                                        <p style="padding: 0px; margin: 5px 0px 0px 0px; line-height: 1px;"><a href=${this.state.facebookLink} target="_blank"><img src="https://i.postimg.cc/gYgNGRq6/facebook.png" width="20" height="20" alt="instagram" border="0" style="width: 20px; height: 20px; border: none; display: inline-block;"></a> &nbsp;<a href=${this.state.linkedinLink} target="_blank"><img src="https://i.postimg.cc/Ws65fxd8/linkedin.png" width="20" height="20" alt="facebook" border="0" style="width: 20px; height: 20px; border: none; display: inline-block;"></a> &nbsp;<a href=${this.state.youtubeLink} target="_blank"><img src="https://i.postimg.cc/y15jZHG1/youtube.png" width="20" height="20" alt="linkedin" border="0" style="width: 20px; height: 20px; border: none; display: inline-block;"></a></p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table></td>
                              <!-- The purple Image is here! --> <td> <!-- <img style="height: 170px;" src="https://i.postimg.cc/0jhTkkTd/investored.png" alt="Financial woes got you up at night?"> --> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    
                  </tr>
                  <tr>
                    <td height="8" style="font-size:1px; line-height:1px;"></td>
                  </tr>
                  
      <!-- RISK? WHAT'S RISK? -->
                  <tr>
                    <td>
                      <a href=${this.state.siteLink} target="_blank">
                        <img style="width: 370px;" src="https://i.postimg.cc/9Fb7bvtZ/risk.png" alt="risk?">
                      </a>
                    </td>
                  </tr>
      
                  <tr>
                    
                    <td bgcolor="#042248" align="left" style="font-family: Arial, Gotham, Helvetica, sans-serif; font-size: 8pt; line-height:130%; color:#ffffff; text-align: center; background-color: #042248; border-bottom: 3px solid #a99b52; padding: 5px 0px;">
                      <a style="text-decoration: none; color: white;" href=${this.state.siteLink} target="_blank">
                        <div style="height: 100%; width: 100%;">
                          CLICK HERE TO DISOVER YOUR PERSONAL RISK NUMBER
                        </div>
                      </a>
                    </td>
                  </tr>
                  
                  <!-- Disclosures -->
                  <td class="lexd" style="font-size: 9px;">
                      <p><u>Securities Regulations</u>: According to industry regulations, we cannot accept orders to execute trades via voice-mail, e-mail or fax.In addition by     corporate policy, we cannot accept time-
                          sensitive information via e-mail or fax. If you would like to execute a trade, or if you have time-
                          sensitive information, please call the office. In the event that you are unable to reach our office please call TD Ameritrade at 800-431-3500.</p>
      
                          <p><u>Confidentiality Notice</u>: The information contained in this e-mail message is being transmitted
                          to and is intended for the use of only the individual(s) to whom it is addressed. If the reader of
                          this message is not the intended recipient, you are hereby advised that any dissemination,
                          distribution or copying of this message is strictly prohibited. If you have received this message
                          in error, please immediately delete.</p>
                  </td>
      
                  
                </tbody>
                </table>
              </td>
              
          </tr>
          <tr>
            <td height="5" style="font-size:1px; line-height:1px;"></td>
          </tr>
          
        </tbody>
      </table>
      </body>
      </html>
      `;
      return sig;
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

          <button type='submit'>Download Signature</button>
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