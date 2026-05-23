const { Panier } = require("../Models/Panier");

class PanierController {

  async addingPanier(req, res, next) {
    try {

      console.log(req.body); // sera vide (normal)

      const ProfileId = req.user._id;

      const newCart = await Panier.create({
        ProfileId
      });

      res.json({
        message: "Cart is successfully created",
        data: newCart
      });

    } catch (error) {
      next(error);
    }
  }

}

module.exports = new PanierController();