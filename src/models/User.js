const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},{
    timestamps: true
});

//Cifrado de contrasena
UserSchema.methods.encryptPassword = async password=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//Comparacion de contrasena con base de datos
UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);