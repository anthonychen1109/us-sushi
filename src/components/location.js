import React from 'react';

const Location = () => {
  return (
    <div className="youtube-wrapper">
        <div>
            <iframe
                title="location"
                className="iframe"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.591783107789!2d-79.97229838534737!3d36.03026071835936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853059b8e398a1b%3A0x87c58376a93e7c71!2s2531+Eastchester+Dr%2C+High+Point%2C+NC+27265!5e0!3m2!1sen!2sus!4v1515006983515`}
                allowFullScreen
            />
        </div>
    </div>
  )
}

export default Location;
