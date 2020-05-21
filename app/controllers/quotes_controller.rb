class QuotesController < ApplicationController

  def index
    @quotes = Quote.all
  end
  def show
    @quote = Quote.find(params[:id])
    @totalht = @quote.totalht
    @totalttc = @quote.totalttc
    @tva = (@totalttc.to_i*10 - @totalht.to_i*10) / 10;
    @walls = @quote.form_peinture
    case @walls
      when '9.5'
        @roomDetails = "Murs Impression";
      when '12'
        @roomDetails = "Murs Blanc Mat";
      when '14'
        @roomDetails = "Murs Blanc Velour";
      when '16'
        @roomDetails = "Murs Pastel";
      else
        "Error"
    end
    @devis_number = '%06d' % @quote.id
  end
  def new
    @quote = Quote.new
    @home_page = true
  end
  def create
    quote = Quote.create(quote_params)
    redirect_to quote_path(quote)
  end
  def edit

  end
  def update

  end
  def delete

  end
    private

    def quote_params
      # params.require(:quote).permit(:devis, :client, :adresse_site, :date,)

      params.require(:quote).permit(:form_gender, :firstname, :lastname, :adresse, :zipcode, :city, :email, :adresse2, :zipcode2, :city2, :phone, :ceiling_m, :ceiling_price, :ceiling_total, :forfait1e, :check_walls, :form_peinture, :walls_m, :walls_coef, :walls_price, :walls_tot, :walls_total, :services_total, :totalht, :totalttc)
    end
end
