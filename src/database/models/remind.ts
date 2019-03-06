const Remind = (sequelize, type) => sequelize.define('reminds', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    text : {
        type: type.STRING,
        allowNull: false
    },
    chat_id : {
        type: type.INTEGER,
        validate: {
          isNumeric : true
        },
        allowNull: false
    },
    time : {
        type: type.DATE,
        allowNull: false
    }
},{
    tableName: 'reminds',
    freezeTableName: true,
    timestamps: true,
    name: {
        singular: 'reminds',
        plural: 'reminds'
    }
})


export default Remind
