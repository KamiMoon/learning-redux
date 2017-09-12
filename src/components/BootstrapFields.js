import React from 'react';

export const BoostrapInput = field =>
<div className={'form-group' +  (field.meta.touched && field.meta.error? ' has-errror': '')}>
    <label className="col-lg-2 control-label" htmlFor={field.input.name}>{field.label}:</label>
    <div className="col-lg-10">
        <input {...field.input} className="form-control input-lg" />
        {field.meta.touched && field.meta.error && <p className="help-block">{field.meta.error}</p>}
    </div>
</div>


export const BoostrapTextArea= field =>
<div className={'form-group' + (field.meta.touched && field.meta.error? ' has-errror': '')}>
    <label className="col-lg-2 control-label" htmlFor={field.input.name}>{field.label}:</label>
    <div className="col-lg-10">
        <textarea {...field.input} className="form-control input-lg" rows={field.rows} cols={field.cols} ></textarea>
        {field.meta.touched && field.meta.error && <p className="help-block">{field.meta.error}</p>}
    </div>
</div>   


//TODO - SELECT

