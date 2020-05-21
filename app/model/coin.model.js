export default (sequelize, Sequelize) => {
  const Coin = sequelize.define('coin_data', {
    project_name: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Project Name is required.'
        }
      }
    },
    coin_name: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Coin Name is required.'
        }
      }
    },
    coin_abbr: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Coin Abbr is required.'
        }
      }
    },
    erc_addr: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The ERC Address is required.'
        },
      }
    },
    erc_decimal: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '',
      isNumeric: true,
      validate: {
        notEmpty: {
          msg: 'The ERC Decimal is required.'
        },
        min: 1, max: 180
      } 
    },
    coin_api: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Coin Api is required.'
        },
      }
    },
    project_desc: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Project Description is required.'
        },
      } 
    },
    wp_link: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The WP Link is required.'
        },
      } 
    },
    logo_link: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Logo Link is required.'
        },
      } 
    },
    project_leagal: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Project Leagal is required.'
        },
      } 
    },
    ceo_con: { 
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The CEO CON is required.'
        },
      } 
    },
    no_member: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: {
          msg: 'The Number of Member is required.'
        },
      } 
    },
    total_coin: { 
      type: Sequelize.DECIMAL(16, 0) 
    },
    total_circ: { type: Sequelize.DECIMAL(16, 0) },
    dist_plan: { type: Sequelize.STRING },
    list_date_exp: { type: Sequelize.DATE },
    ieo_list_date: { type: Sequelize.DATE },
    ieo_price: { type: Sequelize.DECIMAL(16, 0) },
    twitter: { type: Sequelize.STRING },
    fb_link: { type: Sequelize.STRING },
    telegram: { type: Sequelize.STRING },
    web_addr: { type: Sequelize.STRING },
    category: { type: Sequelize.STRING },
  }, {
    timestamps: false
  })
  return Coin;
}