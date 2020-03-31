class StaticPagesController < ApplicationController

  def home
    @home_page = true
  end

  def help
    @devis_page = true
    @form_gender = params[:form_gender]
    @firstname = params[:firstname]
    @lastname = params[:lastname]
    @adresse = params[:adresse]
    @zipcode = params[:zipcode]
    @city = params[:city]
    @adresse_chantier = params[:adresse2]
    @zipcode_chantier = params[:zipcode2]
    @city_chantier = params[:city2]
    @phone = params[:phone]
    @totalht = params[:totalht]
    @totalttc = params[:totalttc]
    @tva = (@totalttc.to_i*10 - @totalht.to_i*10) / 10;
    @ceiling_m = params[:ceiling_m]
    @ceiling_total = params[:ceiling_total]
    @city_chantier = params[:city2]
    @walls = params[:form_peinture]
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
    @wallsquant = params[:walls_m]
    @wallscoef = params[:walls_price]
    @wallstot = params[:walls_tot]
  end

  def about
  end
end
