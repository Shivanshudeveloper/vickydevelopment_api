const Mail = require('../../models/mail');

exports.emailFunc= async(req, res) =>{
    const { email } = req.body;
    
    try {
        const emailApproval = await new Mail({
            email,
          });
          await emailApproval.save();
    res.status(200).send(emailApproval);
    } catch (err) {
        res.status(400).json({ err: err });
    console.log(err);
    }
};