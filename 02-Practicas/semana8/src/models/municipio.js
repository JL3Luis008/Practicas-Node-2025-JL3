import { Datatypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Estado } from './estado';


const Municipio = sequelize.define('Municipio', {
id: {
    type: Datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  estado_id: {
    type: Datatypes.INTEGER, //enteros
    allowNull: false,
    references: {
        model: Estado,
        key: 'id',
  }
}
}, {
  tableName: 'municipios',
  timestamps: false,
}
);

Municipio.belongsTo(Estado, { foreignKey: 'estado_id' });

Estado.hasMany(Municipio, { foreignKey: 'estado_id' });

export {Municipio};

