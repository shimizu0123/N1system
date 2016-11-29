package casestudy;


import java.io.Serializable;

public class Beans implements Serializable{
	// private static final long serialVersionUID = 1L;
	 private AircraftSerch acs;
	 private RealData rd;


	public AircraftSerch getAcs() {
		return acs;
	}
	public void setAcs(AircraftSerch acs) {
		this.acs = acs;
	}
	public RealData getRd() {
		return rd;
	}
	public void setRd(RealData rd) {
		this.rd = rd;
	}

}
