package casestudy;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * コールサインテーブルのDAO
 */
public class CallsignDAO {
	private  Connection con;

	/**
	 * DBと接続する
	 * @param con
	 */
	public CallsignDAO(Connection con) {
		this.con = con;
	}

	/**
	 * DBにデータを格納する
	 * @param callsign CallSignオブジェクト
	 */
	public DB_Item_CallSign insertcallsign(DB_Item_CallSign callsign) throws SQLException{
		String sql = "INSERT INTO callsign(modes, callsign, timestamp)"+
					"VALUES(?,?,systimestamp)";
		PreparedStatement stmt = null;
		try {
			stmt = con.prepareStatement(sql);

			stmt.setString(1,callsign.getModeSAddress());
			stmt.setString(2,callsign.getCallSign());

			//追加するinsert
			stmt.executeUpdate();

		} finally {
			if (stmt != null){
				stmt.close();
			}
		}
		return callsign;
	}
}
