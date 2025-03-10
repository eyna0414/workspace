package study;

public class Student {
	private String name;
	private int korScore;
	private int mathScore;
	private int engScore;
	private int[] totalScore;

	public int[] getTotalScore() {
		return totalScore;
	}

	public void setTotalScore(int[] totalScore) {
		this.totalScore = totalScore;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getKorScore() {
		return korScore;
	}

	public void setKorScore(int korScore) { this.korScore = korScore;
	}

	public int getMathScore() {
		return mathScore;
	}

	public void setMathScore(int mathScore) {
		this.mathScore = mathScore;
	}

	public int getEngScore() {
		return engScore;
	}

	public void setEngScore(int engScore) {
		this.engScore = engScore;
	}
	
}
