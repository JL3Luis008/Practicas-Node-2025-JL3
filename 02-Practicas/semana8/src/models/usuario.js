import { Datatypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Municipio } from './municipio';


const Usuario = sequelize.define('Usuario', {
id: {
    type: Datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  municipio_id: {
    type: Datatypes.INTEGER, //Enteros
    allowNull: false,
    references: {
        model: Municipio,
        key: 'id',
  }
}
}, {
  tableName: 'usuarios',
  timestamps: false,
}
);

Usuario.belongsTo(Municipio, { foreignKey: 'municipio_id' });

Municipio.hasMany(Usuario, { foreignKey: 'municipio_id' });

export {Usuario};

